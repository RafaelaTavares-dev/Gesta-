"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "./utils";

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-xl p-[3px] flex",
        className,
      )}
      {...props}
    />
  );
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      // CLASSE MODIFICADA AQUI:
      className={cn(
        // Remove as classes customizadas (bg-card, bg-muted, etc.)
        // Adiciona um sublinhado rosa na opção ativa
        // O fundo padrão é 'transparent', e a borda inferior é rosa na ativa
        "text-gray-600 inline-flex h-full flex-1 items-center justify-center gap-1.5 px-4 py-2 text-sm font-medium whitespace-nowrap transition-[color] disabled:pointer-events-none disabled:opacity-50",
        
        // ESTILO DO ESTADO ATIVO (data-[state=active]):
        "data-[state=active]:text-pink-500 data-[state=active]:border-pink-500 data-[state=active]:border-b-2",
        
        // Classes originais de foco (mantidas para acessibilidade)
        "focus-visible:ring-[3px] focus-visible:outline-1 focus-visible:ring-ring focus-visible:ring-ring/50",

        className
      )}
      {...props}
    />
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
