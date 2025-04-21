import { useState } from "react";
import { 
  Search, 
  Plus, 
  FileText, 
  Download, 
  Trash2, 
  Upload 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";

const mockEjercicios = [
  {
    id: 1,
    nombre: "Respiración diafragmática",
    descripcion: "Ejercicio de respiración profunda para reducir la ansiedad y el estrés.",
    categoria: "Ansiedad",
    tipoArchivo: "PDF",
    fechaCreacion: "15/03/2024",
  },
  {
    id: 2,
    nombre: "Reestructuración cognitiva",
    descripcion: "Identificar y desafiar pensamientos negativos automáticos.",
    categoria: "Depresión",
    tipoArchivo: "Video",
    fechaCreacion: "22/02/2024",
  },
  {
    id: 3,
    nombre: "Activación conductual",
    descripcion: "Programación de actividades placenteras y significativas.",
    categoria: "Depresión",
    tipoArchivo: "PDF",
    fechaCreacion: "05/04/2024",
  },
  {
    id: 4,
    nombre: "Relajación muscular progresiva",
    descripcion: "Técnica para reducir la tensión física y mental.",
    categoria: "Ansiedad",
    tipoArchivo: "Audio",
    fechaCreacion: "10/01/2024",
  },
  {
    id: 5,
    nombre: "Mindfulness básico",
    descripcion: "Ejercicio de atención plena para principiantes.",
    categoria: "Mindfulness",
    tipoArchivo: "Audio",
    fechaCreacion: "28/03/2024",
  },
];

const categorias = [
  "Ansiedad",
  "Depresión",
  "Mindfulness",
  "Autoestima",
  "Habilidades sociales",
  "Regulación emocional",
  "Trauma",
  "Otra",
];

const BancoEjercicios = () => {
  const [ejercicios, setEjercicios] = useState(mockEjercicios);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddEjercicioOpen, setIsAddEjercicioOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [ejercicioToDelete, setEjercicioToDelete] = useState<number | null>(null);
  const [newEjercicio, setNewEjercicio] = useState({
    nombre: "",
    descripcion: "",
    categoria: "",
    tipoArchivo: "PDF",
  });
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const filteredEjercicios = ejercicios.filter((ejercicio) =>
    ejercicio.nombre.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ejercicio.descripcion.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ejercicio.categoria.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      setUploadedFile(file);
      
      let fileType = "PDF";
      if (file.type.includes("video")) {
        fileType = "Video";
      } else if (file.type.includes("audio")) {
        fileType = "Audio";
      } else if (file.type.includes("image")) {
        fileType = "Imagen";
      }
      
      setNewEjercicio({
        ...newEjercicio,
        tipoArchivo: fileType,
      });
    }
  };

  const handleAddEjercicio = () => {
    if (!newEjercicio.nombre || !newEjercicio.descripcion || !newEjercicio.categoria) {
      toast({
        title: "Error",
        description: "Por favor, completa todos los campos obligatorios.",
        variant: "destructive",
      });
      return;
    }

    const id = ejercicios.length > 0 ? Math.max(...ejercicios.map(e => e.id)) + 1 : 1;
    const today = new Date().toLocaleDateString('es-ES');
    
    setEjercicios([
      ...ejercicios,
      {
        id,
        ...newEjercicio,
        fechaCreacion: today,
      },
    ]);

    setNewEjercicio({
      nombre: "",
      descripcion: "",
      categoria: "",
      tipoArchivo: "PDF",
    });
    setUploadedFile(null);
    setIsAddEjercicioOpen(false);
    
    toast({
      title: "Ejercicio añadido",
      description: `"${newEjercicio.nombre}" ha sido añadido al banco de ejercicios.`,
    });
  };

  const handleDeleteEjercicio = () => {
    if (ejercicioToDelete !== null) {
      setEjercicios(ejercicios.filter((ejercicio) => ejercicio.id !== ejercicioToDelete));
      setIsDeleteDialogOpen(false);
      setEjercicioToDelete(null);
      
      toast({
        title: "Ejercicio eliminado",
        description: "El ejercicio ha sido eliminado del banco de ejercicios.",
      });
    }
  };

  const openDeleteDialog = (id: number) => {
    setEjercicioToDelete(id);
    setIsDeleteDialogOpen(true);
  };

  const getBadgeColor = (tipo: string) => {
    switch (tipo) {
      case "PDF":
        return "bg-red-100 text-red-800 hover:bg-red-200";
      case "Video":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200";
      case "Audio":
        return "bg-purple-100 text-purple-800 hover:bg-purple-200";
      case "Imagen":
        return "bg-green-100 text-green-800 hover:bg-green-200";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-therapy-navy">Banco de Ejercicios</h1>
        <Button onClick={() => setIsAddEjercicioOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Nuevo Ejercicio
        </Button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <Input
          placeholder="Buscar por nombre, descripción o categoría..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[250px]">Nombre</TableHead>
              <TableHead className="hidden md:table-cell">Descripción</TableHead>
              <TableHead className="hidden sm:table-cell">Categoría</TableHead>
              <TableHead className="hidden sm:table-cell">Archivo</TableHead>
              <TableHead className="hidden md:table-cell">Fecha</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredEjercicios.map((ejercicio) => (
              <TableRow key={ejercicio.id}>
                <TableCell className="font-medium">{ejercicio.nombre}</TableCell>
                <TableCell className="hidden md:table-cell">
                  <div className="line-clamp-2">{ejercicio.descripcion}</div>
                </TableCell>
                <TableCell className="hidden sm:table-cell">{ejercicio.categoria}</TableCell>
                <TableCell className="hidden sm:table-cell">
                  <Badge variant="outline" className={getBadgeColor(ejercicio.tipoArchivo)}>
                    {ejercicio.tipoArchivo}
                  </Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">{ejercicio.fechaCreacion}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="icon" title="Descargar">
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="text-red-600 hover:text-red-800"
                      title="Eliminar"
                      onClick={() => openDeleteDialog(ejercicio.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {filteredEjercicios.length === 0 && (
          <div className="text-center py-10">
            <FileText className="h-10 w-10 mx-auto text-gray-400" />
            <p className="mt-2 text-gray-500">No se encontraron ejercicios que coincidan con tu búsqueda.</p>
          </div>
        )}
      </div>

      <Dialog open={isAddEjercicioOpen} onOpenChange={setIsAddEjercicioOpen}>
        <DialogContent className="sm:max-w-[550px] max-h-[90vh]">
          <DialogHeader>
            <DialogTitle>Añadir nuevo ejercicio</DialogTitle>
            <DialogDescription>
              Completa la información para añadir un nuevo ejercicio al banco.
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="max-h-[60vh] pr-4">
            <div className="grid grid-cols-1 gap-4 py-4 pr-2">
              <div className="space-y-2">
                <Label htmlFor="nombre">Nombre del ejercicio *</Label>
                <Input
                  id="nombre"
                  value={newEjercicio.nombre}
                  onChange={(e) => setNewEjercicio({ ...newEjercicio, nombre: e.target.value })}
                  placeholder="Nombre descriptivo del ejercicio"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="descripcion">Descripción *</Label>
                <Textarea
                  id="descripcion"
                  value={newEjercicio.descripcion}
                  onChange={(e) => setNewEjercicio({ ...newEjercicio, descripcion: e.target.value })}
                  placeholder="Describe en qué consiste el ejercicio y cómo debe realizarse"
                  className="min-h-[100px]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="categoria">Categoría *</Label>
                <Select 
                  value={newEjercicio.categoria} 
                  onValueChange={(value) => setNewEjercicio({ ...newEjercicio, categoria: value })}
                >
                  <SelectTrigger id="categoria">
                    <SelectValue placeholder="Selecciona una categoría" />
                  </SelectTrigger>
                  <SelectContent>
                    {categorias.map((categoria) => (
                      <SelectItem key={categoria} value={categoria}>
                        {categoria}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Archivo del ejercicio</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <input
                    type="file"
                    id="ejercicio-file-upload"
                    className="hidden"
                    onChange={handleFileUpload}
                  />
                  {uploadedFile ? (
                    <div className="space-y-2">
                      <div className="flex items-center justify-center space-x-2 text-therapy-teal">
                        <Upload className="h-5 w-5" />
                        <span className="font-medium">Archivo subido</span>
                      </div>
                      <p className="text-sm text-gray-500 truncate">{uploadedFile.name}</p>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setUploadedFile(null)}
                      >
                        Cambiar archivo
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Upload className="h-8 w-8 mx-auto text-gray-400" />
                      <p className="text-sm text-gray-500">
                        Arrastra un archivo o
                      </p>
                      <Label htmlFor="ejercicio-file-upload" className="inline-block">
                        <Button variant="outline" size="sm" className="cursor-pointer">
                          Seleccionar archivo
                        </Button>
                      </Label>
                      <p className="text-xs text-gray-400 mt-2">
                        Formatos aceptados: PDF, documentos, imágenes, audio y video
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </ScrollArea>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddEjercicioOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={handleAddEjercicio}>
              Guardar ejercicio
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Confirmar eliminación</DialogTitle>
            <DialogDescription>
              ¿Estás seguro de que deseas eliminar este ejercicio del banco? Esta acción no se puede deshacer.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Cancelar
            </Button>
            <Button variant="destructive" onClick={handleDeleteEjercicio}>
              Eliminar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BancoEjercicios;
