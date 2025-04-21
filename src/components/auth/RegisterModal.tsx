
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"

interface RegisterModalProps {
  isOpen: boolean
  onClose: () => void
  onRegister: (email: string, password: string, role: string) => void
}

export function RegisterModal({ isOpen, onClose, onRegister }: RegisterModalProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onRegister(email, password, role)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] overflow-y-auto bg-therapy-green border-therapy-teal">
        <DialogHeader className="text-therapy-blue">
          <DialogTitle>Crear Cuenta</DialogTitle>
          <DialogDescription className="text-therapy-blue/80">
            Registra una nueva cuenta en terapIA
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-therapy-blue">Correo electrónico</Label>
            <Input
              id="email"
              type="email"
              placeholder="correo@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-therapy-yellow/50 border-therapy-teal text-therapy-blue placeholder:text-therapy-blue/50"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-therapy-blue">Contraseña</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-therapy-yellow/50 border-therapy-teal text-therapy-blue"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="role" className="text-therapy-blue">Rol</Label>
            <Select onValueChange={setRole} required>
              <SelectTrigger id="role" className="bg-therapy-yellow/50 border-therapy-teal text-therapy-blue">
                <SelectValue placeholder="Selecciona un rol" />
              </SelectTrigger>
              <SelectContent className="bg-therapy-green text-therapy-blue border-therapy-teal">
                <SelectItem value="terapeuta" className="focus:bg-therapy-teal/20">Terapeuta</SelectItem>
                <SelectItem value="paciente" className="focus:bg-therapy-teal/20">Paciente</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="pt-4">
            <Button type="submit" className="w-full bg-therapy-purple hover:bg-therapy-purple/90 text-therapy-green">
              Registrarse
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
