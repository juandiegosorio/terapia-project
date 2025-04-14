
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Calendar, Video, FileText } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function SesionesAnteriores() {
  const sessions = [
    {
      id: 1,
      date: "2024-04-15",
      title: "Sesión #1",
      summary: "Primera sesión introductoria",
      recording: "session1.mp4",
      transcript: "Transcripción detallada de la sesión...",
      analysis: "Análisis de la IA sobre la sesión..."
    },
    {
      id: 2,
      date: "2024-04-16",
      title: "Sesión #2",
      summary: "Seguimiento semanal",
      recording: "session2.mp4",
      transcript: "Transcripción detallada de la sesión...",
      analysis: "Análisis de la IA sobre la sesión..."
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Sesiones Anteriores</h1>
      <ScrollArea className="h-[calc(100vh-200px)]">
        <div className="grid gap-4">
          {sessions.map((session) => (
            <Dialog key={session.id}>
              <DialogTrigger asChild>
                <Card className="cursor-pointer hover:bg-gray-50">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{session.title}</span>
                      <span className="text-sm text-gray-500 flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {session.date}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{session.summary}</p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <DialogHeader>
                  <DialogTitle>{session.title} - {session.date}</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4">
                  <div className="rounded-lg border p-4">
                    <h3 className="flex items-center gap-2 font-semibold mb-2">
                      <Video className="h-5 w-5" />
                      Grabación de la Sesión
                    </h3>
                    <video 
                      controls 
                      className="w-full rounded-lg"
                      src={session.recording}
                    >
                      Tu navegador no soporta la reproducción de video.
                    </video>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h3 className="flex items-center gap-2 font-semibold mb-2">
                      <FileText className="h-5 w-5" />
                      Transcripción
                    </h3>
                    <ScrollArea className="h-40">
                      <p className="text-sm text-gray-600">
                        {session.transcript}
                      </p>
                    </ScrollArea>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h3 className="flex items-center gap-2 font-semibold mb-2">
                      Análisis de IA
                    </h3>
                    <ScrollArea className="h-40">
                      <p className="text-sm text-gray-600">
                        {session.analysis}
                      </p>
                    </ScrollArea>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
