
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Users, Upload, MessageSquare, FolderPlus } from "lucide-react"
import { Input } from "@/components/ui/input"

export function TerapeutaDashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-therapy-navy mb-8">
        Bienvenido, Terapeuta
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Lista de pacientes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Mis Pacientes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {["Ana García", "Carlos López", "María Rodríguez"].map((patient, index) => (
                <div
                  key={index}
                  className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer"
                >
                  <div className="font-medium">{patient}</div>
                  <div className="text-sm text-gray-600">
                    Última sesión: 12 de Abril, 2024
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Nueva sesión */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5" />
              Nueva Sesión
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Seleccionar Paciente
                </label>
                <select className="w-full rounded-md border border-input bg-background px-3 py-2">
                  <option>Ana García</option>
                  <option>Carlos López</option>
                  <option>María Rodríguez</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Notas de la Sesión
                </label>
                <Textarea
                  placeholder="Escribe las notas de la sesión aquí..."
                  className="min-h-[150px]"
                />
              </div>
              <Button className="w-full">Guardar Sesión</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Chat con IA */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            Consultar IA sobre Pacientes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <div className="h-64 border rounded-lg p-4 overflow-y-auto">
              <div className="text-gray-400 text-center mt-8">
                Realiza consultas sobre tus pacientes
              </div>
            </div>
            <div className="flex gap-2">
              <Textarea
                placeholder="Escribe tu consulta sobre un paciente..."
                className="flex-1"
              />
              <Button>Enviar</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Banco de ejercicios */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FolderPlus className="h-5 w-5" />
            Banco de Ejercicios
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Título del Ejercicio
              </label>
              <Input placeholder="Nombre del ejercicio" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Descripción
              </label>
              <Textarea
                placeholder="Describe el ejercicio en detalle..."
                className="min-h-[100px]"
              />
            </div>
            <Button className="w-full">Agregar Ejercicio</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
