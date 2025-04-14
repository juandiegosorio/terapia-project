
import { useState, useRef, useEffect } from "react";
import { Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

type Message = {
  id: number;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
};

const ConsultarIA = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "Hola, soy tu asistente de terapIA. ¿En qué puedo ayudarte hoy? Puedes consultarme sobre tus pacientes, técnicas terapéuticas o cualquier otra duda profesional.",
      role: 'assistant',
      timestamp: new Date(),
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      content: inputMessage,
      role: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);
    
    // Simulate AI response after a delay
    setTimeout(() => {
      const mockResponses = [
        "Basado en lo que me cuentas, podría ser útil considerar técnicas de terapia cognitivo-conductual para este caso. Este enfoque ha mostrado buenos resultados en situaciones similares.",
        "Para ese tipo de situación, te recomendaría considerar ejercicios de mindfulness y autorregulación emocional. Estos podrían ayudar al paciente a desarrollar mayor conciencia sobre sus patrones de pensamiento.",
        "Es importante recordar que cada paciente es único. En este caso, podría ser beneficioso explorar más sobre su historia familiar y relaciones interpersonales para entender mejor el contexto de sus dificultades actuales.",
        "Los síntomas que describes podrían estar relacionados con varios factores. Te sugeriría evaluar tanto aspectos psicológicos como posibles influencias fisiológicas o ambientales que puedan estar contribuyendo.",
        "Esa es una observación muy pertinente. Considerando el progreso descrito, podría ser momento de ajustar el plan terapéutico para enfocarse más en estrategias de prevención de recaídas y fortalecimiento de logros.",
      ];
      
      const randomResponse = mockResponses[Math.floor(Math.random() * mockResponses.length)];
      
      const assistantMessage: Message = {
        id: messages.length + 2,
        content: randomResponse,
        role: 'assistant',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('es-ES', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div className="flex flex-col h-[calc(100vh-12rem)]">
      <h1 className="text-2xl font-bold text-therapy-navy mb-6">Consultar IA</h1>
      
      <Card className="flex-1 flex flex-col overflow-hidden">
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex max-w-[80%] ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`px-4 py-3 rounded-lg ${
                    message.role === 'user' 
                      ? 'bg-therapy-teal text-white ml-2' 
                      : 'bg-gray-100 mr-2'
                  }`}>
                    <p className="text-sm">{message.content}</p>
                    <p className={`text-xs mt-1 ${
                      message.role === 'user' 
                        ? 'text-white/70 text-right' 
                        : 'text-gray-500'
                    }`}>
                      {formatTime(message.timestamp)}
                    </p>
                  </div>
                  
                  <Avatar className="h-8 w-8">
                    {message.role === 'user' ? (
                      <>
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>TR</AvatarFallback>
                      </>
                    ) : (
                      <>
                        <AvatarFallback className="bg-therapy-deep-purple text-white">
                          <Bot className="h-4 w-4" />
                        </AvatarFallback>
                      </>
                    )}
                  </Avatar>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex flex-row">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-therapy-deep-purple text-white">
                      <Bot className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="bg-gray-100 rounded-lg p-3 ml-2">
                    <div className="flex space-x-2">
                      <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '600ms' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>
        
        <CardContent className="p-4 border-t">
          <div className="flex gap-2">
            <Textarea
              placeholder="Escribe tu consulta aquí..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              className="min-h-[60px] resize-none"
              disabled={isLoading}
            />
            <Button 
              onClick={handleSendMessage} 
              disabled={!inputMessage.trim() || isLoading}
              className="self-end"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ConsultarIA;
