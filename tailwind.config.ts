import type { Config } from "tailwindcss";

export default {
  // 1. CONFIGURAÇÃO DE CONTEÚDO (CONTENT)
  content: [
    "./index.html",
    // Seu array de conteúdo atual, incluindo componentes
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    // Adiciona o container (padrão Shadcn)
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    
    extend: {
      // 2. CORES CUSTOMIZADAS (ESSENCIAL PARA O ESTADO ATIVO DA BARRA)
      // O Tailwind irá buscar os valores (var(--...)) no seu src/index.css
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        // CLASSES QUE FALTAVAM:
        muted: {
          DEFAULT: "hsl(var(--muted))", // Fundo da barra inativa
          foreground: "hsl(var(--muted-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))", // Cor da aba selecionada (a barra branca)
          foreground: "hsl(var(--card-foreground))",
        },
        // Se a cor rosa do seu tema Gesta+ não aparecer, use 'accent'
        accent: {
           DEFAULT: "hsl(var(--accent))",
           foreground: "hsl(var(--accent-foreground))",
         },
      },

      // 3. BORDER RADIUS CUSTOMIZADO
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
} satisfies Config;
