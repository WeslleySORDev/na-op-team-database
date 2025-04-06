import type React from "react";
import { PlusCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/app/components/ui/Button";

type HeaderProps = {
  showBackButton?: boolean;
  backUrl?: string;
  rightContent?: React.ReactNode;
};

export function Header({
  showBackButton = false,
  backUrl = "/",
  rightContent,
}: HeaderProps) {
  return (
    <header className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-6 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          {showBackButton && (
            <Button href={backUrl} variant="ghost" className="mr-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
          )}
          <h1 className="text-2xl font-bold">OP Team Database</h1>
        </div>

        {rightContent ? (
          rightContent
        ) : (
          <Button href="/create-team" variant="secondary">
            <PlusCircle className="mr-2 h-4 w-4" />
            Criar Novo Time
          </Button>
        )}
      </div>
    </header>
  );
}
