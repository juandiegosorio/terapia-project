
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Pencil, Save } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

// Mock profile data
const mockProfile = {
  nombre: "Dr. Juan Pérez",
  email: "terapeuta@test.com",
  especialidad: "Psicología Clínica",
  licencia: "PSI-12345",
  telefono: "+34 600 123 456",
  direccion: "Calle Principal 123, Madrid",
  biografia: "Psicólogo clínico con más de 10 años de experiencia en el tratamiento de trastornos de ansiedad y depresión. Especializado en terapia cognitivo-conductual y mindfulness.",
  estudios: [
    { id: 1, titulo: "Doctorado en Psicología Clínica", institucion: "Universidad Complutense de Madrid", año: "2015" },
    { id: 2, titulo: "Máster en Terapia Cognitivo-Conductual", institucion: "Universidad Autónoma de Barcelona", año: "2010" },
    { id: 3, titulo: "Licenciatura en Psicología", institucion: "Universidad de Valencia", año: "2008" }
  ],
  certificaciones: [
    { id: 1, titulo: "Certificación en EMDR", institucion: "Asociación EMDR España", año: "2018" },
    { id: 2, titulo: "Certificación en Mindfulness", institucion: "Instituto de Mindfulness", año: "2016" }
  ]
};

const PerfilTerapeuta = () => {
  const [profile, setProfile] = useState(mockProfile);
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState(mockProfile);

  const handleEditProfile = () => {
    setIsEditing(true);
    setEditedProfile(profile);
  };

  const handleSaveProfile = () => {
    setProfile(editedProfile);
    setIsEditing(false);
    
    toast({
      title: "Perfil actualizado",
      description: "Tus cambios han sido guardados correctamente.",
    });
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedProfile(profile);
  };

  const handleInputChange = (field: string, value: string) => {
    setEditedProfile({
      ...editedProfile,
      [field]: value
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-therapy-navy">Mi Perfil</h1>
        {!isEditing ? (
          <Button onClick={handleEditProfile}>
            <Pencil className="mr-2 h-4 w-4" />
            Editar perfil
          </Button>
        ) : (
          <div className="space-x-2">
            <Button variant="outline" onClick={handleCancelEdit}>
              Cancelar
            </Button>
            <Button onClick={handleSaveProfile}>
              <Save className="mr-2 h-4 w-4" />
              Guardar cambios
            </Button>
          </div>
        )}
      </div>

      <Tabs defaultValue="informacion">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="informacion">Información personal</TabsTrigger>
          <TabsTrigger value="formacion">Formación</TabsTrigger>
        </TabsList>
        
        <TabsContent value="informacion" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="md:col-span-1">
              <CardHeader className="flex flex-col items-center">
                <div className="relative">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="/placeholder.svg" alt="Foto de perfil" />
                    <AvatarFallback className="text-2xl">JP</AvatarFallback>
                  </Avatar>
                  {isEditing && (
                    <div className="absolute bottom-0 right-0">
                      <Button size="icon" variant="outline" className="h-8 w-8 rounded-full">
                        <Pencil className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </div>
                <CardTitle className="mt-4 text-center">{profile.nombre}</CardTitle>
                <CardDescription className="text-center">{profile.especialidad}</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Datos personales</CardTitle>
                <CardDescription>Información básica de contacto y profesional</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nombre">Nombre completo</Label>
                    {isEditing ? (
                      <Input
                        id="nombre"
                        value={editedProfile.nombre}
                        onChange={(e) => handleInputChange("nombre", e.target.value)}
                      />
                    ) : (
                      <div className="p-2 border rounded bg-gray-50">{profile.nombre}</div>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo electrónico</Label>
                    {isEditing ? (
                      <Input
                        id="email"
                        type="email"
                        value={editedProfile.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                      />
                    ) : (
                      <div className="p-2 border rounded bg-gray-50">{profile.email}</div>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="especialidad">Especialidad</Label>
                    {isEditing ? (
                      <Input
                        id="especialidad"
                        value={editedProfile.especialidad}
                        onChange={(e) => handleInputChange("especialidad", e.target.value)}
                      />
                    ) : (
                      <div className="p-2 border rounded bg-gray-50">{profile.especialidad}</div>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="licencia">Número de licencia</Label>
                    {isEditing ? (
                      <Input
                        id="licencia"
                        value={editedProfile.licencia}
                        onChange={(e) => handleInputChange("licencia", e.target.value)}
                      />
                    ) : (
                      <div className="p-2 border rounded bg-gray-50">{profile.licencia}</div>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="telefono">Teléfono</Label>
                    {isEditing ? (
                      <Input
                        id="telefono"
                        value={editedProfile.telefono}
                        onChange={(e) => handleInputChange("telefono", e.target.value)}
                      />
                    ) : (
                      <div className="p-2 border rounded bg-gray-50">{profile.telefono}</div>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="direccion">Dirección profesional</Label>
                    {isEditing ? (
                      <Input
                        id="direccion"
                        value={editedProfile.direccion}
                        onChange={(e) => handleInputChange("direccion", e.target.value)}
                      />
                    ) : (
                      <div className="p-2 border rounded bg-gray-50">{profile.direccion}</div>
                    )}
                  </div>
                </div>
                
                <div className="mt-4 space-y-2">
                  <Label htmlFor="biografia">Biografía profesional</Label>
                  {isEditing ? (
                    <Textarea
                      id="biografia"
                      value={editedProfile.biografia}
                      onChange={(e) => handleInputChange("biografia", e.target.value)}
                      className="min-h-[120px]"
                    />
                  ) : (
                    <div className="p-2 border rounded bg-gray-50 whitespace-pre-wrap">
                      {profile.biografia}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="formacion" className="mt-6">
          <div className="grid grid-cols-1 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Estudios</CardTitle>
                <CardDescription>Formación académica</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {profile.estudios.map((estudio) => (
                    <div key={estudio.id} className="border rounded p-4">
                      <div className="font-semibold">{estudio.titulo}</div>
                      <div className="text-sm text-gray-500">{estudio.institucion}, {estudio.año}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Certificaciones</CardTitle>
                <CardDescription>Certificaciones y cursos especializados</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {profile.certificaciones.map((certificacion) => (
                    <div key={certificacion.id} className="border rounded p-4">
                      <div className="font-semibold">{certificacion.titulo}</div>
                      <div className="text-sm text-gray-500">{certificacion.institucion}, {certificacion.año}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PerfilTerapeuta;
