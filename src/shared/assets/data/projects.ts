import authenticationApiCover from "@/shared/assets/images/projects/authentication_api_cover.webp";
import authenticationCover from "@/shared/assets/images/projects/authentication_cover.webp";
import ecommerceApiCover from "@/shared/assets/images/projects/ecommerce_api_cover.webp";
import flappyBirdCover from "@/shared/assets/images/projects/flappy_bird_cover.webp";
import memoryGameCover from "@/shared/assets/images/projects/memory_game_cover.webp";
import ticTacToeCover from "@/shared/assets/images/projects/tic_tac_toe_cover.webp";
import snakeGameCover from "@/shared/assets/images/projects/snake_game_cover.webp";
import ecommerceCover from "@/shared/assets/images/projects/ecommerce_cover.webp";
import todoListCover from "@/shared/assets/images/projects/todo_list_cover.webp";
import termoCover from "@/shared/assets/images/projects/termo_cover.webp";

export const PROJECTS = [
  {
    name: "Authentication",
    description: "project:front-authentication.description",
    cover: authenticationCover,
    link: "https://github.com/guilhermesebastiao/authentication",
    stacks: ["TypeScript", "Next", "Tailwind"],
  },
  {
    name: "Authentication API",
    description: "project:back-authentication.description",
    cover: authenticationApiCover,
    link: "https://github.com/guilhermesebastiao/authentication-api",
    stacks: ["Java", "SpringBoot", "Spring Security", "Postgres", "RabbitMQ", "Redis", "Docker"],
  },
  {
    name: "Ecommerce",
    description: "project:front-ecommerce.description",
    cover: ecommerceCover,
    link: "https://github.com/guilhermesebastiao/ecommerce",
    stacks: ["TypeScript", "React", "Tailwind"],
  },
  {
    name: "Ecommerce API",
    description: "project:back-ecommerce.description",
    cover: ecommerceApiCover,
    link: "https://github.com/guilhermesebastiao/ecommerce-api",
    stacks: ["Java", "SpringBoot", "Spring Security", "Postgres", "RabbitMQ", "Docker"],
  },
  {
    name: "ToDoList",
    description: "project:to-do-list.description",
    cover: todoListCover,
    link: "https://github.com/guilhermesebastiao/to-do-list",
    stacks: ["React", "Tailwind", "Fastify", "Prisma", "Postgres"],
  },
  {
    name: "Jogo da Velha",
    description: "project:tic-tac-toe.description",
    cover: ticTacToeCover,
    link: "https://github.com/guilhermesebastiao/jogo-da-velha",
    stacks: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Flappy Bird",
    description: "project:flappy-bird.description",
    cover: flappyBirdCover,
    link: "https://github.com/guilhermesebastiao/flappy-bird",
    stacks: ["HTML", "CSS", "JavaScript", "Canvas"],
  },
  {
    name: "Termo",
    description: "project:termo.description",
    cover: termoCover,
    link: "https://github.com/guilhermesebastiao/termo",
    stacks: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Jogo da Cobrinha",
    description: "project:snake-game.description",
    cover: snakeGameCover,
    link: "https://github.com/guilhermesebastiao/jogo-da-cobrinha",
    stacks: ["HTML", "CSS", "JavaScript", "Canvas"],
  },
  {
    name: "Jogo da Memória",
    description: "project:memory-game.description",
    cover: memoryGameCover,
    link: "https://github.com/guilhermesebastiao/jogo-da-cobrinha",
    stacks: ["HTML", "CSS", "JavaScript"],
  },
] as const;

export type Project = (typeof PROJECTS)[number];
