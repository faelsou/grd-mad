# GRD MAD

Landing page do Studio R Planejados desenvolvida com **React**, **TypeScript**, **Vite** e **Tailwind CSS**. O projeto usa Node.js 20 e possui uma pipeline de CI para garantir a qualidade do código.

## Requisitos
- Node.js 20+
- npm 10+

## Instalação e uso
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Ambiente de desenvolvimento com recarregamento automático:
   ```bash
   npm run dev
   ```
3. Gerar build de produção:
   ```bash
   npm run build
   ```
4. Visualizar a build localmente:
   ```bash
   npm run preview
   ```
5. Executar linter:
   ```bash
   npm run lint
   ```

## Estrutura
- `src/` – código-fonte React
  - `components/` – seções da página: `Header`, `Hero`, `About`, `Differentials`, `Portfolio`, `Testimonials`, `CTA`, `Footer` e `WhatsAppFloat`
- `public/` – ativos estáticos

## Docker
O repositório inclui um `Dockerfile` multistage que constrói o projeto e o executa usando `vite preview` na porta `4173`.

Para construir e executar a imagem manualmente:
```bash
docker build -t grd-mad .
docker run -p 4173:4173 grd-mad
```

### Docker Compose
Um `docker-compose.yml` disponibiliza um serviço `web`:
```bash
docker compose up --build
```
O site ficará disponível em `http://localhost:4173`.

## Integração Contínua
O workflow `ci.yml` executa `npm ci`, `npm run lint` e `npm run build` para cada _push_ ou _pull request_ direcionado ao branch `main`.

## Licença
Este projeto é distribuído sob a licença MIT.
