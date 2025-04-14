
import { useState } from "react";
import { 
  Mic, 
  Upload, 
  Check, 
  Save 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";

// Mock patients for the select dropdown
const mockPatients = [
  { id: 1, name: "María García" },
  { id: 2, name: "Carlos López" },
  { id: 3, name: "Ana Martínez" },
];

const NuevaSesion = () => {
  const [selectedPatient, setSelectedPatient] = useState("");
  const [notes, setNotes] = useState("");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [recordingInterval, setRecordingInterval] = useState<number | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      setUploadedFile(file);
      toast({
        title: "Archivo subido",
        description: `${file.name} ha sido subido correctamente.`
      });
    }
  };

  const toggleRecording = () => {
    if (!isRecording) {
      // Start recording
      setIsRecording(true);
      setRecordingTime(0);
      const interval = window.setInterval(() => {
        setRecordingTime(prevTime => prevTime + 1);
      }, 1000);
      setRecordingInterval(interval);
      
      toast({
        title: "Grabación iniciada",
        description: "La grabación ha comenzado. Habla claramente."
      });
    } else {
      // Stop recording
      if (recordingInterval) {
        clearInterval(recordingInterval);
      }
      setIsRecording(false);
      setRecordingInterval(null);
      
      toast({
        title: "Grabación finalizada",
        description: `Grabación de ${formatTime(recordingTime)} guardada correctamente.`
      });
      
      // In a real app, here you'd save the recording
    }
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleSaveSession = () => {
    if (!selectedPatient) {
      toast({
        title: "Error",
        description: "Por favor, selecciona un paciente antes de guardar la sesión.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Sesión guardada",
      description: "La nueva sesión ha sido guardada correctamente."
    });

    // Reset the form
    setNotes("");
    setUploadedFile(null);
    setIsRecording(false);
    if (recordingInterval) {
      clearInterval(recordingInterval);
    }
    setRecordingTime(0);
    setRecordingInterval(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-therapy-navy">Nueva Sesión</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="patient-select">Seleccionar paciente</Label>
            <Select 
              value={selectedPatient} 
              onValueChange={setSelectedPatient}
            >
              <SelectTrigger id="patient-select" className="w-full">
                <SelectValue placeholder="Selecciona un paciente" />
              </SelectTrigger>
              <SelectContent>
                {mockPatients.map(patient => (
                  <SelectItem key={patient.id} value={patient.id.toString()}>
                    {patient.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="session-notes">Notas de la sesión</Label>
            <Textarea
              id="session-notes"
              placeholder="Escribe aquí tus notas sobre la sesión..."
              className="min-h-[200px]"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <h2 className="text-lg font-medium">Grabación o archivo de la sesión</h2>
                
                <div className="space-y-6">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <input
                      type="file"
                      id="file-upload"
                      accept="audio/*,video/*"
                      className="hidden"
                      onChange={handleFileUpload}
                    />
                    {uploadedFile ? (
                      <div className="space-y-2">
                        <div className="flex items-center justify-center space-x-2 text-therapy-teal">
                          <Check className="h-6 w-6" />
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
                          Arrastra un archivo de audio o video aquí, o
                        </p>
                        <Label htmlFor="file-upload" className="inline-block">
                          <Button variant="outline" size="sm" className="cursor-pointer">
                            Seleccionar archivo
                          </Button>
                        </Label>
                      </div>
                    )}
                  </div>

                  <div className="text-center">
                    <p className="text-sm text-gray-500 mb-4">O graba directamente una nueva sesión</p>
                    <div className="space-y-2">
                      <Button
                        onClick={toggleRecording}
                        variant={isRecording ? "destructive" : "default"}
                        className={`w-full ${isRecording ? "animate-pulse" : ""}`}
                      >
                        <Mic className="mr-2 h-4 w-4" />
                        {isRecording ? "Detener grabación" : "Iniciar grabación"}
                      </Button>
                      {isRecording && (
                        <div className="text-sm font-medium">
                          Grabando: {formatTime(recordingTime)}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Button 
            className="w-full" 
            onClick={handleSaveSession}
            disabled={!selectedPatient}
          >
            <Save className="mr-2 h-4 w-4" />
            Guardar sesión
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NuevaSesion;
