(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/(private)/Auth/(accessToken)/(refreshToken)/LoginLoader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoginLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function LoginLoader({ accessToken, refreshToken }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoginLoader.useEffect": ()=>{
            setMounted(true);
        }
    }["LoginLoader.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoginLoader.useEffect": ()=>{
            if (!mounted) return;
            // Progress bar animation
            const progressInterval = setInterval({
                "LoginLoader.useEffect.progressInterval": ()=>{
                    setProgress({
                        "LoginLoader.useEffect.progressInterval": (prev)=>{
                            if (prev >= 90) return prev;
                            return prev + Math.random() * 30;
                        }
                    }["LoginLoader.useEffect.progressInterval"]);
                }
            }["LoginLoader.useEffect.progressInterval"], 300);
            const timer = setTimeout({
                "LoginLoader.useEffect.timer": async ()=>{
                    if (!accessToken || !refreshToken) {
                        router.replace('/login');
                        return;
                    }
                    try {
                        const response = await fetch('/api/auth/session', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                accessToken,
                                refreshToken
                            }),
                            credentials: 'include'
                        });
                        if (!response.ok) {
                            throw new Error('Failed to create session');
                        }
                        setProgress(100);
                        setTimeout({
                            "LoginLoader.useEffect.timer": ()=>{
                                router.replace('/home');
                            }
                        }["LoginLoader.useEffect.timer"], 300);
                    } catch (error) {
                        console.error('Error finalizing login session:', error);
                        router.replace('/login');
                    }
                }
            }["LoginLoader.useEffect.timer"], 1500);
            return ({
                "LoginLoader.useEffect": ()=>{
                    clearInterval(progressInterval);
                    clearTimeout(timer);
                }
            })["LoginLoader.useEffect"];
        }
    }["LoginLoader.useEffect"], [
        router,
        mounted,
        accessToken,
        refreshToken
    ]);
    if (!mounted) return null;
    const isDark = theme === 'dark';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex justify-center items-center min-h-screen flex-col gap-8 transition-colors duration-500 ${isDark ? 'bg-linear-to-br from-slate-950 via-slate-900 to-blue-950' : 'bg-linear-to-br from-blue-50 via-white to-blue-100'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-blue-500 via-blue-400 to-cyan-400`
            }, void 0, false, {
                fileName: "[project]/src/app/(private)/Auth/(accessToken)/(refreshToken)/LoginLoader.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `text-4xl font-bold bg-linear-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent`,
                    children: "Invoice IQ"
                }, void 0, false, {
                    fileName: "[project]/src/app/(private)/Auth/(accessToken)/(refreshToken)/LoginLoader.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(private)/Auth/(accessToken)/(refreshToken)/LoginLoader.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative w-20 h-20 mb-6 ${isDark ? 'drop-shadow-2xl' : 'drop-shadow-lg'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 rounded-full border-4 border-transparent border-t-blue-400 border-r-blue-400 animate-spin",
                        style: {
                            animationDuration: '2s'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/(private)/Auth/(accessToken)/(refreshToken)/LoginLoader.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-2 rounded-full border-3 border-transparent border-b-cyan-400 border-l-cyan-400 animate-spin",
                        style: {
                            animationDuration: '3s',
                            animationDirection: 'reverse'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/(private)/Auth/(accessToken)/(refreshToken)/LoginLoader.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-2 h-2 bg-linear-to-r from-blue-400 to-cyan-400 rounded-full"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(private)/Auth/(accessToken)/(refreshToken)/LoginLoader.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(private)/Auth/(accessToken)/(refreshToken)/LoginLoader.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(private)/Auth/(accessToken)/(refreshToken)/LoginLoader.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: `text-4xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`,
                        children: "Authenticating"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(private)/Auth/(accessToken)/(refreshToken)/LoginLoader.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`,
                        children: "Securing your session..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/(private)/Auth/(accessToken)/(refreshToken)/LoginLoader.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(private)/Auth/(accessToken)/(refreshToken)/LoginLoader.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-64 mt-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `h-1 rounded-full overflow-hidden ${isDark ? 'bg-slate-700' : 'bg-blue-200'}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-full bg-linear-to-r from-blue-400 to-cyan-400 transition-all duration-500 ease-out rounded-full",
                        style: {
                            width: `${progress}%`
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/(private)/Auth/(accessToken)/(refreshToken)/LoginLoader.tsx",
                        lineNumber: 142,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/(private)/Auth/(accessToken)/(refreshToken)/LoginLoader.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(private)/Auth/(accessToken)/(refreshToken)/LoginLoader.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3 mt-8",
                children: [
                    0,
                    1,
                    2
                ].map((index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-2.5 h-2.5 bg-linear-to-r from-blue-400 to-cyan-400 rounded-full animate-bounce",
                        style: {
                            animationDelay: `${index * 0.15}s`,
                            animationDuration: '1.2s'
                        }
                    }, index, false, {
                        fileName: "[project]/src/app/(private)/Auth/(accessToken)/(refreshToken)/LoginLoader.tsx",
                        lineNumber: 152,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/(private)/Auth/(accessToken)/(refreshToken)/LoginLoader.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500 to-transparent opacity-50`
            }, void 0, false, {
                fileName: "[project]/src/app/(private)/Auth/(accessToken)/(refreshToken)/LoginLoader.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(private)/Auth/(accessToken)/(refreshToken)/LoginLoader.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
_s(LoginLoader, "j1aiLpnLB0FfCByd1ZtfPQQDH18=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = LoginLoader;
var _c;
__turbopack_context__.k.register(_c, "LoginLoader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_%28private%29_Auth_%28accessToken%29_%28refreshToken%29_LoginLoader_tsx_b72ee1af._.js.map