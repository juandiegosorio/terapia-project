
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Dumbbell, File } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function EjerciciosSugeridos() {
  const exercises = [
    {
      id: 1,
      title: "Ejercicio de respiración profunda",
      description: "Técnica de respiración diafragmática para reducir la ansiedad",
      duration: "10 minutos",
      attachment: "breathing-exercise.pdf"
    },
    {
      id: 2,
      title: "Meditación guiada",
      description: "Meditación para mejorar la concentración y reducir el estrés",
      duration: "15 minutos",
      attachment: "meditation-guide.mp3"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ejercicios Sugeridos</h1>
      <ScrollArea className="h-[calc(100vh-200px)]">
        <div className="grid gap-4">
          {exercises.map((exercise) => (
            <Dialog key={exercise.id}>
              <DialogTrigger asChild>
                <Card className="cursor-pointer hover:bg-gray-50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Dumbbell className="h-5 w-5" />
                      {exercise.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-2">{exercise.description}</p>
                    <p className="text-sm text-gray-500">
                      Duración: {exercise.duration}
                    </p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{exercise.title}</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <p className="text-gray-600">{exercise.description}</p>
                  <p className="text-sm text-gray-500">
                    Duración recomendada: {exercise.duration}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-blue-600">
                    <File className="h-4 w-4" />
                    <a href={exercise.attachment} download>
                      Descargar material del ejercicio
                    </a>
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
