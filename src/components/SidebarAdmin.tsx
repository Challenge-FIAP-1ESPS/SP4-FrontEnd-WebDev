import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  UserCircle,
  LogOut,
  Bell,
  User,
  Stethoscope,
  Pill,
  Wrench,
  Sparkles,
  Settings,
  Shield,
  FileText,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface SidebarAdminProps {
  isSheetOpen?: boolean;
  onSheetOpenChange?: (open: boolean) => void;
}

export const SidebarAdmin: React.FC<SidebarAdminProps> = ({
  isSheetOpen = false,
  onSheetOpenChange,
}) => {
  const location = useLocation();

  const menuItems = [
    {
      icon: <LayoutDashboard size={20} />,
      text: "Início",
      link: "/home-admin",
    },
    {
      icon: <Settings size={20} />,
      text: "Painel Admin",
      link: "/admin-dashboard",
    },
  ];

  const accountItems = [
    { icon: <UserCircle size={20} />, text: "Perfil", link: "#" },
    { icon: <LogOut size={20} />, text: "Sair", link: "/" },
  ];

  const areaItems = [
    { icon: <Stethoscope size={20} />, text: "Médicos", link: "/home-medico" },
    { icon: <User size={20} />, text: "Pacientes", link: "/home-paciente" },
    { icon: <Pill size={20} />, text: "Farmácia", link: "/home-farmacia" },
    { icon: <Bell size={20} />, text: "Enfermaria", link: "/home-enfermaria" },
    { icon: <Sparkles size={20} />, text: "Limpeza", link: "/home-limpeza" },
    {
      icon: <Wrench size={20} />,
      text: "Manutenção",
      link: "/home-manutencao",
    },
  ];

  const MenuItem = ({
    icon,
    text,
    link,
  }: {
    icon: React.ReactNode;
    text: string;
    link: string;
  }) => {
    const active = location.pathname === link;

    return (
      <Link
        to={link}
        className="w-full"
        onClick={() => onSheetOpenChange?.(false)}
      >
        <div
          className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors 
          ${
            active
              ? "bg-red-100 text-red-600"
              : "hover:bg-gray-100 text-gray-700 hover:text-gray-900"
          }`}
        >
          {icon}
          <span className="text-sm font-medium">{text}</span>
        </div>
      </Link>
    );
  };

  // Versão para desktop
  const DesktopSidebar = () => (
    <div className="hidden md:flex md:w-64 bg-white border-r border-gray-200 h-screen flex-col">
      <div className="p-4">
        <Link
          to="/home-admin"
          className="flex items-center justify-center mb-6 mt-2"
        >
          <div className="bg-white p-4 flex items-center justify-center">
            <img
              src="/images/logo-sabara.png"
              alt="Logo Hospital Sabará"
              className="h-12 object-contain cursor-pointer hover:opacity-80 transition-opacity"
            />
          </div>
        </Link>

        {/* Perfil do Admin */}
        <div className="mb-6 p-3 bg-blue-50 rounded-lg border border-blue-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">R</span>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-900 text-sm">
                Roberto Admin
              </p>
              <p className="text-xs text-blue-600">Administrador</p>
            </div>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>
        </div>

        <div className="px-4">
          <nav className="space-y-1">
            {menuItems.map((item, index) => (
              <MenuItem
                key={index}
                icon={item.icon}
                text={item.text}
                link={item.link}
              />
            ))}
          </nav>

          <div className="mt-8">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-2">
              CONTA
            </h3>
            <Separator className="my-2" />
            <nav className="space-y-1 mt-3">
              {accountItems.map((item, index) => (
                <MenuItem
                  key={index}
                  icon={item.icon}
                  text={item.text}
                  link={item.link}
                />
              ))}
            </nav>
          </div>

          <div className="mt-8">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-2">
              ÁREAS
            </h3>
            <Separator className="my-2" />
            <nav className="space-y-1 mt-3">
              {areaItems.map((item, index) => (
                <MenuItem
                  key={index}
                  icon={item.icon}
                  text={item.text}
                  link={item.link}
                />
              ))}
            </nav>
          </div>
        </div>
      </div>

      <div className="mt-auto p-4 border-t border-gray-200">
        <div className="flex items-center bg-blue-50 p-3 rounded-md">
          <div className="bg-blue-100 p-2 rounded-md">
            <Bell size={20} className="text-blue-500" />
          </div>
          <div className="ml-3">
            <p className="text-xs font-medium text-gray-900">
              Número de emergência:
            </p>
            <p className="text-xs text-blue-600">+55 (11) XXXX - XXXX</p>
          </div>
        </div>
      </div>
    </div>
  );

  // Versão para mobile
  const MobileSidebar = () => (
    <Sheet open={isSheetOpen} onOpenChange={onSheetOpenChange}>
      <SheetContent side="left" className="p-0 w-[280px]">
        <div className="h-full flex flex-col">
          <div className="bg-white p-4 flex items-center justify-center">
            <Link to="/home-admin" onClick={() => onSheetOpenChange?.(false)}>
              <img
                src="/images/logo-sabara.png"
                alt="Logo Hospital Sabará"
                className="h-12 object-contain cursor-pointer hover:opacity-80 transition-opacity"
              />
            </Link>
          </div>

          {/* Perfil do Admin - Mobile */}
          <div className="mx-4 mb-6 p-3 bg-blue-50 rounded-lg border border-blue-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">R</span>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900 text-sm">
                  Roberto Admin
                </p>
                <p className="text-xs text-blue-600">Administrador</p>
              </div>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
          </div>

          <nav className="space-y-1">
            {menuItems.map((item, index) => (
              <MenuItem
                key={index}
                icon={item.icon}
                text={item.text}
                link={item.link}
              />
            ))}
          </nav>

          <div className="mt-8">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-2">
              CONTA
            </h3>
            <Separator className="my-2" />
            <nav className="space-y-1 mt-3">
              {accountItems.map((item, index) => (
                <MenuItem
                  key={index}
                  icon={item.icon}
                  text={item.text}
                  link={item.link}
                />
              ))}
            </nav>
          </div>

          <div className="mt-8">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-2">
              ÁREAS
            </h3>
            <Separator className="my-2" />
            <nav className="space-y-1 mt-3">
              {areaItems.map((item, index) => (
                <MenuItem
                  key={index}
                  icon={item.icon}
                  text={item.text}
                  link={item.link}
                />
              ))}
            </nav>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );

  return (
    <>
      <DesktopSidebar />
      <MobileSidebar />
    </>
  );
};

export default SidebarAdmin;
