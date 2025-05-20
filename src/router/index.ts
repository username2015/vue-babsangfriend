import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Features from '../views/Features.vue';
import Preview from '../views/Preview.vue';
import Download from '../views/Download.vue';
import Testimonial from '../views/Testimonial.vue';
import Tech from '../views/Tech.vue';
import DevStory from '../views/DevStory.vue';
import Contact from '../views/Contact.vue';
import FAQ from '../views/FAQ.vue';

// 상세 페이지 컴포넌트 import
import AiRecipe from '../views/AiRecipe.vue';
import CookingTimer from '../views/CookingTimer.vue';
import RecipeChallenge from '../views/RecipeChallenge.vue';
import StepByStep from '../views/StepByStep.vue';
import Favorites from '../views/Favorites.vue';
import HealthIntegration from '../views/HealthIntegration.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/features', name: 'Features', component: Features },
  { path: '/preview', name: 'Preview', component: Preview },
  { path: '/download', name: 'Download', component: Download },
  { path: '/testimonial', name: 'Testimonial', component: Testimonial },
  { path: '/tech', name: 'Tech', component: Tech },
  { path: '/devstory', name: 'DevStory', component: DevStory },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/faq', name: 'FAQ', component: FAQ },

  // 상세 페이지 경로 추가
  { path: '/ai-recipe', name: 'AiRecipe', component: AiRecipe },
  { path: '/cooking-timer', name: 'CookingTimer', component: CookingTimer },
  {
    path: '/recipe-challenge',
    name: 'RecipeChallenge',
    component: RecipeChallenge,
  },
  { path: '/step-by-step', name: 'StepByStep', component: StepByStep },
  { path: '/favorites', name: 'Favorites', component: Favorites },
  {
    path: '/health-integration',
    name: 'HealthIntegration',
    component: HealthIntegration,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
