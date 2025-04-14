
import { useState } from "react";
import { 
  UserPlus, 
  Search, 
  MoreVertical, 
  Calendar, 
  FileText, 
  Trash2 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";

// Mock data for patients
const mockPatients = [
  { 
    id: 1, 
    nombre: "María García", 
    edad: 35, 
    diagnostico: "Ansiedad generalizada",
    email: "maria.garcia@ejemplo.com",
    telefono: "+34 623 456 789",
    inicioTerapia: "12/03/2024",
    ultimaSesion: "10/04/2024",
  },
  { 
    id: 2, 
    nombre: "Carlos López", 
    edad: 42, 
    diagnostico: "Depresión",
    email: "carlos.lopez@ejemplo.com",
    telefono: "+34 612 345 678",
    inicioTerapia: "05/01/2024",
    ultimaSesion: "05/04/2024",
  },
  { 
    id: 3, 
    nombre: "Ana Martínez", 
    edad: 28, 
    diagnostico: "Estrés post-traumático",
    email: "ana.martinez@ejemplo.com",
    telefono: "+34 634 567 890",
    inicioTerapia: "20/02/2024",
    ultimaSesion: "12/04/2024",
  },
];

const MisPacientes = () => {
  const [patients, setPatients] = useState(mockPatients);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddPatientOpen, setIsAddPatientOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [patientToDelete, setPatientToDelete] = useState<number | null>(null);
  const [newPatient, setNewPatient] = useState({
    nombre: "",
    edad: "",
    diagnostico: "",
    email: "",
    telefono: "",
  });

  const filteredPatients = patients.filter((patient) =>
    patient.nombre.toLowerCase().includes(searchQuery.toLowerCase()) ||
    patient.diagnostico.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddPatient = () => {
    // Validate form data
    if (!newPatient.nombre || !newPatient.edad || !newPatient.diagnostico) {
      toast({
        title: "Error",
        description: "Por favor, rellena todos los campos obligatorios.",
        variant: "destructive",
      });
      return;
    }

    // Add new patient
    const id = patients.length > 0 ? Math.max(...patients.map(p => p.id)) + 1 : 1;
    const today = new Date().toLocaleDateString('es-ES');
    
    setPatients([
      ...patients,
      {
        id,
        ...newPatient,
        edad: parseInt(newPatient.edad),
        inicioTerapia: today,
        ultimaSesion: today,
      },
    ]);

    // Reset form and close dialog
    setNewPatient({
      nombre: "",
      edad: "",
      diagnostico: "",
      email: "",
      telefono: "",
    });
    setIsAddPatientOpen(false);
    
    toast({
      title: "Paciente añadido",
      description: `${newPatient.nombre} ha sido añadido a tu lista de pacientes.`,
    });
  };

  const handleDeletePatient = () => {
    if (patientToDelete !== null) {
      setPatients(patients.filter((patient) => patient.id !== patientToDelete));
      setIsDeleteDialogOpen(false);
      setPatientToDelete(null);
      
      toast({
        title: "Paciente eliminado",
        description: "El paciente ha sido eliminado de tu lista.",
      });
    }
  };

  const openDeleteDialog = (id: number) => {
    setPatientToDelete(id);
    setIsDeleteDialogOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-therapy-navy">Mis Pacientes</h1>
        <Button onClick={() => setIsAddPatientOpen(true)}>
          <UserPlus className="mr-2 h-4 w-4" />
          Nuevo Paciente
        </Button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <Input
          placeholder="Buscar por nombre o diagnóstico..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPatients.map((patient) => (
          <Card key={patient.id} className="overflow-hidden">
            <CardHeader className="p-4 bg-therapy-light-cream/30">
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={`https://avatar.vercel.sh/${patient.id}.png`} alt={patient.nombre} />
                    <AvatarFallback>{patient.nombre.split(" ").map(n => n[0]).join("").toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-md">{patient.nombre}</CardTitle>
                    <p className="text-sm text-gray-500">{patient.edad} años</p>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-white">
                    <DropdownMenuItem className="flex items-center cursor-pointer">
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>Programar sesión</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex items-center cursor-pointer">
                      <FileText className="mr-2 h-4 w-4" />
                      <span>Ver historial</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => openDeleteDialog(patient.id)} className="flex items-center cursor-pointer text-red-600">
                      <Trash2 className="mr-2 h-4 w-4" />
                      <span>Eliminar</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-2">
                <div>
                  <h3 className="text-sm font-semibold">Diagnóstico</h3>
                  <p className="text-sm">{patient.diagnostico}</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <h3 className="text-sm font-semibold">Inicio terapia</h3>
                    <p className="text-sm">{patient.inicioTerapia}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">Última sesión</h3>
                    <p className="text-sm">{patient.ultimaSesion}</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Contacto</h3>
                  <p className="text-sm truncate">{patient.email}</p>
                  <p className="text-sm">{patient.telefono}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredPatients.length === 0 && (
        <div className="text-center py-10">
          <p className="text-gray-500">No se encontraron pacientes que coincidan con tu búsqueda.</p>
        </div>
      )}

      {/* Add Patient Dialog */}
      <Dialog open={isAddPatientOpen} onOpenChange={setIsAddPatientOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Añadir nuevo paciente</DialogTitle>
            <DialogDescription>
              Completa la información para registrar un nuevo paciente.
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-1 gap-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="nombre">Nombre completo *</Label>
              <Input
                id="nombre"
                value={newPatient.nombre}
                onChange={(e) => setNewPatient({ ...newPatient, nombre: e.target.value })}
                placeholder="Nombre y apellidos"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="edad">Edad *</Label>
                <Input
                  id="edad"
                  type="number"
                  value={newPatient.edad}
                  onChange={(e) => setNewPatient({ ...newPatient, edad: e.target.value })}
                  placeholder="Edad"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="telefono">Teléfono</Label>
                <Input
                  id="telefono"
                  value={newPatient.telefono}
                  onChange={(e) => setNewPatient({ ...newPatient, telefono: e.target.value })}
                  placeholder="+34 600 000 000"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input
                id="email"
                type="email"
                value={newPatient.email}
                onChange={(e) => setNewPatient({ ...newPatient, email: e.target.value })}
                placeholder="ejemplo@correo.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="diagnostico">Diagnóstico inicial *</Label>
              <Input
                id="diagnostico"
                value={newPatient.diagnostico}
                onChange={(e) => setNewPatient({ ...newPatient, diagnostico: e.target.value })}
                placeholder="Diagnóstico o motivo de consulta"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddPatientOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={handleAddPatient}>
              Guardar paciente
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Confirmar eliminación</DialogTitle>
            <DialogDescription>
              ¿Estás seguro de que deseas eliminar a este paciente de tu lista? Esta acción no se puede deshacer.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Cancelar
            </Button>
            <Button variant="destructive" onClick={handleDeletePatient}>
              Eliminar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MisPacientes;
