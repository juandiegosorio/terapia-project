
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User } from "lucide-react"

export default function PerfilPaciente() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Mi Perfil</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Información Personal</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-center mb-6">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>
                  <User className="h-12 w-12" />
                </AvatarFallback>
              </Avatar>
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Nombre completo</Label>
              <Input id="name" defaultValue="Juan Pérez" readOnly />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input id="email" defaultValue="paciente@test.com" readOnly />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Teléfono</Label>
              <Input id="phone" defaultValue="+34 123 456 789" readOnly />
            </div>
            <Button className="w-full">Editar Perfil</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Información de Terapia</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Terapeuta Asignado</Label>
              <p className="text-gray-600">Dra. María García</p>
            </div>
            <div className="space-y-2">
              <Label>Fecha de Inicio</Label>
              <p className="text-gray-600">15 de Marzo, 2024</p>
            </div>
            <div className="space-y-2">
              <Label>Próxima Sesión</Label>
              <p className="text-gray-600">22 de Abril, 2024 - 15:00</p>
            </div>
            <div className="space-y-2">
              <Label>Sesiones Completadas</Label>
              <p className="text-gray-600">8 sesiones</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
