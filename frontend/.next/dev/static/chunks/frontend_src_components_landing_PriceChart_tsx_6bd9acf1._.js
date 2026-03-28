(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/src/components/landing/PriceChart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PriceChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
"use client";
;
;
const bars = [
    {
        height: "40%",
        bg: "bg-primary/10",
        tooltip: "₹42.00"
    },
    {
        height: "55%",
        bg: "bg-primary/20"
    },
    {
        height: "45%",
        bg: "bg-primary/30"
    },
    {
        height: "70%",
        bg: "bg-primary/40"
    },
    {
        height: "85%",
        bg: "bg-primary/50",
        spike: true
    },
    {
        height: "75%",
        bg: "bg-primary/60"
    },
    {
        height: "95%",
        bg: "bg-primary/70"
    },
    {
        height: "80%",
        bg: "bg-primary/80"
    },
    {
        height: "60%",
        bg: "bg-primary"
    },
    {
        height: "40%",
        bg: "bg-primary/40"
    }
];
const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct"
];
function PriceChart() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "6ec312b30fd6aca57859fb46dd557e6e357ab4f8c8f20d8ac3617d116897ffd5") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6ec312b30fd6aca57859fb46dd557e6e357ab4f8c8f20d8ac3617d116897ffd5";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                    className: "text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest",
                    children: "Daily Essentials"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/landing/PriceChart.tsx",
                    lineNumber: 48,
                    columnNumber: 15
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-space-grotesk text-2xl font-bold",
                    children: "Amul Milk (1L Packet)"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/landing/PriceChart.tsx",
                    lineNumber: 48,
                    columnNumber: 131
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/landing/PriceChart.tsx",
            lineNumber: 48,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8",
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2 flex-wrap",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "px-3 py-1 bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-300 rounded text-xs font-bold",
                            children: "+12.5% Spike"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/landing/PriceChart.tsx",
                            lineNumber: 55,
                            columnNumber: 138
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary dark:text-blue-300 rounded text-xs font-bold",
                            children: "Forecast: Downward"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/landing/PriceChart.tsx",
                            lineNumber: 55,
                            columnNumber: 272
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/landing/PriceChart.tsx",
                    lineNumber: 55,
                    columnNumber: 100
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/landing/PriceChart.tsx",
            lineNumber: 55,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-64 flex items-end gap-2 px-4 border-b border-slate-100 dark:border-slate-800",
            children: bars.map(_PriceChartBarsMap)
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/landing/PriceChart.tsx",
            lineNumber: 62,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "font-outfit bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden text-slate-900 dark:text-slate-100",
            children: [
                t1,
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between mt-4 text-xs font-bold text-slate-400 uppercase tracking-tighter",
                    children: months.map(_PriceChartMonthsMap)
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/landing/PriceChart.tsx",
                    lineNumber: 69,
                    columnNumber: 197
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/landing/PriceChart.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    return t3;
}
_c = PriceChart;
function _PriceChartMonthsMap(m) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        children: m
    }, m, false, {
        fileName: "[project]/frontend/src/components/landing/PriceChart.tsx",
        lineNumber: 77,
        columnNumber: 10
    }, this);
}
function _PriceChartBarsMap(bar, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex-1 ${bar.bg} rounded-t-lg relative group cursor-default transition-opacity hover:opacity-90`,
        style: {
            height: bar.height
        },
        children: [
            "tooltip" in bar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "opacity-0 group-hover:opacity-100 absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs py-1 px-2 rounded whitespace-nowrap transition-opacity duration-200 pointer-events-none z-10",
                children: bar.tooltip
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/PriceChart.tsx",
                lineNumber: 82,
                columnNumber: 27
            }, this),
            "spike" in bar && bar.spike && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -top-6 left-1/2 -translate-x-1/2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "material-symbols-outlined text-red-500",
                    style: {
                        fontSize: "20px"
                    },
                    children: "warning"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/landing/PriceChart.tsx",
                    lineNumber: 82,
                    columnNumber: 357
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/PriceChart.tsx",
                lineNumber: 82,
                columnNumber: 298
            }, this)
        ]
    }, i, true, {
        fileName: "[project]/frontend/src/components/landing/PriceChart.tsx",
        lineNumber: 80,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "PriceChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_src_components_landing_PriceChart_tsx_6bd9acf1._.js.map