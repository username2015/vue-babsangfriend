"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/features', label: 'Features' },
    { to: '/preview', label: 'Preview' },
    { to: '/download', label: 'Download' },
    { to: '/faq', label: 'FAQ' },
    { to: '/testimonial', label: 'Testimonials' },
    { to: '/tech', label: 'Tech' },
    { to: '/devstory', label: 'Dev Story' },
    { to: '/contact', label: 'Contact' },
];
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)(__assign({ class: "fixed w-full z-30 top-0 left-0 bg-white/70 backdrop-blur-lg shadow-md" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between h-16" }));
var __VLS_0 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ to: "/" }, { class: "flex items-center space-x-2" })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ to: "/" }, { class: "flex items-center space-x-2" })], __VLS_functionalComponentArgsRest(__VLS_1), false));
__VLS_3.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "text-2xl md:text-3xl font-extrabold text-purple-800 tracking-tight drop-shadow" }));
var __VLS_3;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex space-x-1 md:space-x-4" }));
for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.navItems)); _i < _a.length; _i++) {
    var item = _a[_i][0];
    var __VLS_4 = {}.RouterLink;
    /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
    // @ts-ignore
    var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4(__assign(__assign({ key: (item.to), to: (item.to) }, { class: "px-2 py-1 rounded-lg text-gray-700 text-base font-medium hover:bg-purple-100 hover:text-purple-700 transition-colors" }), { activeClass: "bg-purple-200 text-purple-800 font-bold" })));
    var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([__assign(__assign({ key: (item.to), to: (item.to) }, { class: "px-2 py-1 rounded-lg text-gray-700 text-base font-medium hover:bg-purple-100 hover:text-purple-700 transition-colors" }), { activeClass: "bg-purple-200 text-purple-800 font-bold" })], __VLS_functionalComponentArgsRest(__VLS_5), false));
    __VLS_7.slots.default;
    (item.label);
    var __VLS_7;
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "h-16" }));
/** @type {__VLS_StyleScopedClasses['fixed']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['z-30']} */ ;
/** @type {__VLS_StyleScopedClasses['top-0']} */ ;
/** @type {__VLS_StyleScopedClasses['left-0']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white/70']} */ ;
/** @type {__VLS_StyleScopedClasses['backdrop-blur-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-md']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-7xl']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:px-8']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['h-16']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['space-x-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['md:text-3xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-extrabold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-purple-800']} */ ;
/** @type {__VLS_StyleScopedClasses['tracking-tight']} */ ;
/** @type {__VLS_StyleScopedClasses['drop-shadow']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['space-x-1']} */ ;
/** @type {__VLS_StyleScopedClasses['md:space-x-4']} */ ;
/** @type {__VLS_StyleScopedClasses['px-2']} */ ;
/** @type {__VLS_StyleScopedClasses['py-1']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['text-base']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-purple-100']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-purple-700']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
/** @type {__VLS_StyleScopedClasses['h-16']} */ ;
var __VLS_dollars;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {
            navItems: navItems,
        };
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
