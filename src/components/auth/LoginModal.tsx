
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { toast } from "@/components/ui/use-toast"

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
  onLogin: (email: string, password: string, role: string) => void
}

export function LoginModal({ isOpen, onClose, onLogin }: LoginModalProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock login logic for demo
    if (email === "terapeuta@test.com" && password === "password") {
      onLogin(email, password, "terapeuta")
      toast({
        title: "Inicio de sesión exitoso",
        description: "Has iniciado sesión como terapeuta",
      })
    } else if (email === "paciente@test.com" && password === "password") {
      onLogin(email, password, "paciente")
      toast({
        title: "Inicio de sesión exitoso",
        description: "Has iniciado sesión como paciente",
      })
    } else {
      toast({
        title: "Credenciales inválidas",
        description: "El correo o la contraseña son incorrectos. Intenta con terapeuta@test.com / password o paciente@test.com / password",
        variant: "destructive"
      })
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Iniciar Sesión</DialogTitle>
          <DialogDescription>
            Ingresa tus credenciales para acceder a tu cuenta
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Correo electrónico</Label>
            <Input
              id="email"
              type="email"
              placeholder="correo@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Contraseña</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="pt-4">
            <Button type="submit" className="w-full">
              Iniciar Sesión
            </Button>
          </div>
          <div className="text-xs text-center text-gray-500">
            <p>Cuentas demo:</p>
            <p>terapeuta@test.com / password</p>
            <p>paciente@test.com / password</p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
