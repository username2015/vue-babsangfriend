"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_router_1 = require("vue-router");
// 주요 페이지
var Home_vue_1 = require("../views/Home.vue");
var About_vue_1 = require("../views/About.vue");
var Features_vue_1 = require("../views/Features.vue");
var Preview_vue_1 = require("../views/Preview.vue");
var Download_vue_1 = require("../views/Download.vue");
var Testimonial_vue_1 = require("../views/Testimonial.vue");
var Tech_vue_1 = require("../views/Tech.vue");
var DevStory_vue_1 = require("../views/DevStory.vue");
var Contact_vue_1 = require("../views/Contact.vue");
var FAQ_vue_1 = require("../views/FAQ.vue");
// 상세 기능 페이지
var AiRecipe_vue_1 = require("../views/AiRecipe.vue");
var CookingTimer_vue_1 = require("../views/CookingTimer.vue");
var RecipeChallenge_vue_1 = require("../views/RecipeChallenge.vue");
var StepByStep_vue_1 = require("../views/StepByStep.vue");
var Favorites_vue_1 = require("../views/Favorites.vue");
var HealthIntegration_vue_1 = require("../views/HealthIntegration.vue");
var routes = [
    { path: '/', name: 'Home', component: Home_vue_1.default },
    { path: '/about', name: 'About', component: About_vue_1.default },
    { path: '/features', name: 'Features', component: Features_vue_1.default },
    { path: '/preview', name: 'Preview', component: Preview_vue_1.default },
    { path: '/download', name: 'Download', component: Download_vue_1.default },
    { path: '/testimonial', name: 'Testimonial', component: Testimonial_vue_1.default },
    { path: '/tech', name: 'Tech', component: Tech_vue_1.default },
    { path: '/devstory', name: 'DevStory', component: DevStory_vue_1.default },
    { path: '/contact', name: 'Contact', component: Contact_vue_1.default },
    { path: '/faq', name: 'FAQ', component: FAQ_vue_1.default },
    // 상세 기능 페이지
    { path: '/ai-recipe', name: 'AiRecipe', component: AiRecipe_vue_1.default },
    { path: '/cooking-timer', name: 'CookingTimer', component: CookingTimer_vue_1.default },
    {
        path: '/recipe-challenge',
        name: 'RecipeChallenge',
        component: RecipeChallenge_vue_1.default,
    },
    { path: '/step-by-step', name: 'StepByStep', component: StepByStep_vue_1.default },
    { path: '/favorites', name: 'Favorites', component: Favorites_vue_1.default },
    {
        path: '/health-integration',
        name: 'HealthIntegration',
        component: HealthIntegration_vue_1.default,
    },
    // 존재하지 않는 경로는 홈으로 리디렉션 (선택 사항)
    { path: '/:pathMatch(.*)*', redirect: '/' },
];
var router = (0, vue_router_1.createRouter)({
    history: (0, vue_router_1.createWebHistory)(),
    routes: routes,
});
exports.default = router;
