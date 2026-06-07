---
name: portfolio-next-project-status
description: Describe el estado actual del portafolio en Next.js y los cambios planificados. Úsalo antes de modificar la estructura, componentes o estilos del proyecto.
---

# Estado y Cambios del Proyecto de Portafolio

## Instrucciones para el agente

- Antes de hacer cambios grandes (nuevas secciones, refactors, reorganizar carpetas), lee siempre este archivo completo.
- Respeta el **estado actual** descrito abajo y revisa la lista de **cambios planificados** para alinear tu trabajo.
- Si completas alguno de los cambios planificados, actualiza la sección correspondiente para que el archivo siga estando al día.
- Mantén este archivo **breve y concreto**: solo puntos importantes de arquitectura, estado y próximos pasos.

## Estado actual del proyecto

- **Stack**:
  - Next.js (App Router) con `"use client"` en componentes interactivos.
  - Tailwind CSS para estilos.
  - `framer-motion` para animaciones.
  - Sistema de traducciones mediante `useTranslation` desde `@/hooks/useTranslation`.
- **Estructura principal**:
  - Página principal en `src/app/page.tsx` que compone:
    - `Header`
    - `HeroSection`
    - `AboutMe`
    - `WorkExperience`
    - `Projects`
    - `StudiesAndCertificates`
    - `Footer`
  - `HeroSection` está extraído como componente reutilizable en `src/components/HeroSection.tsx`.
  - Fondo animado con `AnimatedBackground` y `FloatingShapes` desde `@/components/animated-background`.
- **Convenciones**:
  - Los componentes de UI viven en `src/components` y se nombran en **PascalCase**.
  - Los estilos deben hacerse con **clases de Tailwind**, evitando CSS suelto cuando sea posible.
  - Los textos visibles deben pasar, siempre que aplique, por el sistema de traducciones (`useTranslation`).

## Cambios planificados

> Actualiza esta sección a medida que vayas decidiendo nuevas tareas.

- [ ] Definir y documentar todas las secciones principales del portafolio (Hero, Sobre mí, Experiencia, Proyectos, Estudios, Contacto).
- [ ] Revisar que todos los textos estén internacionalizados usando `useTranslation`.
- [ ] Revisar y unificar estilos de botones y enlaces (primary/secondary) para que sean consistentes en todo el sitio.
- [ ] Extraer cualquier lógica repetida en componentes compartidos dentro de `src/components`.

## Notas de trabajo

Usa este espacio para dejar contexto adicional que ayude en sesiones futuras:

- Anota aquí decisiones importantes de arquitectura (por ejemplo, cómo organizar nuevas secciones).
- Anota aquí decisiones de diseño (por ejemplo, paleta de colores o patrones de animación a seguir).

### Prompt de cinemática 3D para hero

```text
Highly detailed 3D cinematic of a realistic smartphone with content that exits and re-enters the screen, product presentation style showcasing modern developer services.
Pure white matte background (clean studio white), soft realistic shadows, minimal gradients, high-key lighting.
Total duration: exactly 10 seconds, 16:9, 4K, smooth camera movement.
CRITICAL: NO AUDIO. NO TEXT. NO WORDS. NO LETTERS. NO LOGOS. NO LABELS. NO SUBTITLES. NO CAPTIONS. NO UI TEXT ELEMENTS. PURE VISUAL ONLY.

PHASE 1 (0.0s–2.5s): Teléfono cayendo con website en pantalla
- A realistic modern smartphone (iPhone style) enters from the top of the frame, falling downward with smooth rotation as it descends.
- The phone screen shows a real-looking modern website: hero section, navbar, cards, dashboard elements, portfolio layout.
- The website content is visible and readable, but NO TEXT LABELS, NO WORDS, NO LETTERS on the website itself (only visual UI elements like shapes, icons, colors, layouts).
- The phone falls from top-center, rotating slowly, moving toward the left side of the frame.
- Camera follows the phone smoothly, keeping it large and readable.

PHASE 2 (2.5s–4.5s): Componente sale del teléfono y enfoque a página web
- The website content INSIDE the phone screen smoothly EXPANDS and EXITS the phone frame, growing larger as it leaves the phone.
- The website component becomes a full-sized webpage floating in 3D space, separate from the phone.
- Camera smoothly transitions to focus on this full webpage, showing it clearly: modern website layout with hero section, navigation, cards, dashboard elements.
- The phone remains visible but smaller in the background, screen now empty or showing a transition effect.
- The webpage is the main focus, clearly visible and detailed.

PHASE 3 (4.5s–6.5s): Componente regresa al teléfono
- The webpage component smoothly contracts and RETURNS back into the phone screen, shrinking as it re-enters the phone frame.
- The website content is now back inside the phone screen.
- The phone moves back toward the center-right of the frame.
- Camera follows the phone as the content returns.

PHASE 4 (6.5s–8.0s): Teléfono gira rápidamente
- The phone performs a FAST ROTATION (360 degrees or more) while moving.
- The rotation is smooth but rapid, creating a dynamic transition effect.
- Camera follows the rapid rotation smoothly, keeping the phone in focus.

PHASE 5 (8.0s–10.0s): Pantalla muestra app de servicios de programador
- As the phone completes its rotation and stabilizes, the screen content transforms to show app interfaces representing developer services:
  - Mobile app UI with clean dashboard, cards, navigation elements,
  - Code editor interfaces,
  - App builder and development tools,
  - Automation and testing interfaces,
  - Modern developer workflow visualizations.
- The app content is visual only: NO TEXT, NO WORDS, NO LETTERS, NO LABELS (only icons, shapes, colors, UI layouts, code syntax highlighting without readable text).
- The phone ends in a stable position, screen clearly visible, ready for text overlay on your website.

IMPORTANT CONSTRAINTS:
- ABSOLUTELY NO TEXT ANYWHERE: no words, no letters, no labels, no UI text, no captions, no subtitles, no logos with text.
- NO AUDIO: silent video, no sound effects, no music.
- The phone must move laterally (left-right) throughout the video to create negative space for text overlays.
- Premium minimal aesthetic, soft depth of field, subtle bloom.
- The phone should be clearly visible and readable at all times, with enough empty space on alternating sides for text placement.
- The expansion/contraction of the screen content should be smooth and visually appealing, like a zoom effect.
```


