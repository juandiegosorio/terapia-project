
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { CalendarDays, MessageSquare, Dumbbell } from "lucide-react"

export function PacienteDashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-therapy-navy mb-8">
        Bienvenido, Paciente
      </h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        {/* Sesiones previas */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CalendarDays className="h-5 w-5" />
              Sesiones Anteriores
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((session) => (
                <div
                  key={session}
                  className="p-4 border rounded-lg hover:bg-gray-50"
                >
                  <div className="font-medium">Sesión #{session}</div>
                  <div className="text-sm text-gray-600">15 de Abril, 2024</div>
                  <div className="mt-2 text-sm">
                    Resumen breve de la sesión anterior...
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Ejercicios sugeridos */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Dumbbell className="h-5 w-5" />
              Ejercicios Sugeridos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {["Ejercicio de respiración", "Meditación guiada", "Ejercicio de visualización"].map((exercise, index) => (
                <div
                  key={index}
                  className="p-4 border rounded-lg hover:bg-gray-50"
                >
                  <div className="font-medium">{exercise}</div>
                  <div className="text-sm text-gray-600">
                    Duración: 10 minutos
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Chat con IA */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            Chat con Asistente IA
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <div className="h-64 border rounded-lg p-4 overflow-y-auto">
              {/* Chat messages would go here */}
              <div className="text-gray-400 text-center mt-8">
                Inicia una conversación con tu asistente IA
              </div>
            </div>
            <div className="flex gap-2">
              <Textarea placeholder="Escribe tu mensaje..." className="flex-1" />
              <Button>Enviar</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
