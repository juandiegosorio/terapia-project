
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import Features from "./pages/Features";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Layouts
import TherapistLayout from "./components/layouts/TherapistLayout";
import PatientLayout from "./components/layouts/PatientLayout";

// Therapist Pages
import MisPacientes from "./pages/terapeuta/MisPacientes";
import NuevaSesion from "./pages/terapeuta/NuevaSesion";
import ConsultarIA from "./pages/terapeuta/ConsultarIA";
import BancoEjercicios from "./pages/terapeuta/BancoEjercicios";
import PerfilTerapeuta from "./pages/terapeuta/PerfilTerapeuta";

// Patient Pages
import SesionesAnteriores from "./pages/paciente/SesionesAnteriores";
import EjerciciosSugeridos from "./pages/paciente/EjerciciosSugeridos";
import ChatIA from "./pages/paciente/ChatIA";
import PerfilPaciente from "./pages/paciente/PerfilPaciente";

// Create a client
const queryClient = new QueryClient();

const App: React.FC = () => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/features" element={<Features />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Therapist routes with shared layout */}
            <Route path="/dashboard/terapeuta" element={<TherapistLayout />}>
              <Route index element={<MisPacientes />} />
              <Route path="pacientes" element={<MisPacientes />} />
              <Route path="nueva-sesion" element={<NuevaSesion />} />
              <Route path="consultar-ia" element={<ConsultarIA />} />
              <Route path="banco-ejercicios" element={<BancoEjercicios />} />
              <Route path="perfil" element={<PerfilTerapeuta />} />
            </Route>
            
            {/* Patient routes with shared layout */}
            <Route path="/dashboard/paciente" element={<PatientLayout />}>
              <Route index element={<SesionesAnteriores />} />
              <Route path="sesiones" element={<SesionesAnteriores />} />
              <Route path="ejercicios" element={<EjerciciosSugeridos />} />
              <Route path="chat-ia" element={<ChatIA />} />
              <Route path="perfil" element={<PerfilPaciente />} />
            </Route>
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TooltipProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);

export default App;
