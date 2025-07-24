module.exports = {

"[project]/.next-internal/server/app/api/leaderboard/route/actions.js [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/app/api/leaderboard/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "GET": ()=>GET
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
async function GET() {
    try {
        console.log('=== LEADERBOARD REQUEST START ===');
        const query = `
      query GetArcadeScores {
        transactions(
          tags: [
            { name: "Application", values: ["Tetris-Leaderboard", "Pacman-Leaderboard"] },
            { name: "Type", values: ["Score"] }
          ]
          order: DESC
          first: 500
        ) {
          edges {
            node {
              id
              timestamp
              tags { name value }
            }
          }
        }
      }
    `;
        let allScores = [];
        const graphqlEndpoints = [
            'https://devnet.irys.xyz/graphql',
            'https://gateway.irys.xyz/graphql',
            'https://arweave.net/graphql'
        ];
        for (const endpoint of graphqlEndpoints){
            try {
                const res = await fetch(endpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        query
                    }),
                    signal: AbortSignal.timeout(10000)
                });
                if (!res.ok) {
                    console.log(endpoint, 'non-200', res.status);
                    continue;
                }
                const result = await res.json();
                if (result.errors) {
                    console.log('errors', result.errors);
                    continue;
                }
                const edges = result.data?.transactions?.edges || [];
                for (const e of edges){
                    const node = e.node;
                    const tags = node.tags || [];
                    const tagMap = {};
                    tags.forEach((t)=>{
                        tagMap[t.name] = t.value;
                    });
                    const rawApp = (tagMap.Application || '').toLowerCase();
                    const gameType = rawApp.includes('pacman') ? 'pacman' : 'tetris';
                    const score = parseInt(tagMap.Score || '0');
                    const lines = parseInt(tagMap.Lines || '0');
                    const level = parseInt(tagMap.Level || '1');
                    const player = tagMap.Player || '';
                    const timestamp = parseInt(tagMap.Timestamp || node.timestamp);
                    if (score > 0 && player) {
                        allScores.push({
                            txId: node.id,
                            walletAddress: player,
                            score,
                            lines,
                            level,
                            timestamp,
                            gameType,
                            source: 'Irys'
                        });
                    }
                }
                break;
            } catch (err) {
                console.log('endpoint fail', endpoint, err.message);
            }
        }
        if (allScores.length === 0) {
            console.log('GraphQL failed, try known direct (fallback)');
            const knownTxIds = [];
            for (const txId of knownTxIds){
                try {
                    const r = await fetch(`https://gateway.irys.xyz/${txId}`);
                    if (r.ok) {
                        const body = await r.json();
                        if (body.score && body.walletAddress) {
                            allScores.push({
                                txId,
                                walletAddress: body.walletAddress,
                                score: body.score,
                                lines: body.lines || 0,
                                level: body.level || 1,
                                timestamp: body.timestamp,
                                gameType: body.gameType || 'tetris',
                                source: 'Direct'
                            });
                        }
                    }
                } catch  {}
            }
        }
        const getHighestScorePerWallet = (scores, gameType)=>{
            const map = new Map();
            scores.filter((s)=>s.gameType === gameType).forEach((s)=>{
                const w = s.walletAddress.toLowerCase();
                const ex = map.get(w);
                if (!ex || s.score > ex.score) map.set(w, s);
            });
            return Array.from(map.values()).sort((a, b)=>b.score - a.score);
        };
        const tetrisScores = getHighestScorePerWallet(allScores, 'tetris').slice(0, 50);
        const pacmanScores = getHighestScorePerWallet(allScores, 'pacman').slice(0, 50);
        const allWalletScores = new Map();
        allScores.forEach((s)=>{
            const w = s.walletAddress.toLowerCase();
            const ex = allWalletScores.get(w);
            if (!ex || s.score > ex.score) allWalletScores.set(w, s);
        });
        const combinedLeaderboard = Array.from(allWalletScores.values()).sort((a, b)=>b.score - a.score).slice(0, 50).map((entry, i)=>({
                rank: i + 1,
                txId: entry.txId,
                displayAddress: `${entry.walletAddress.slice(0, 6)}...${entry.walletAddress.slice(-4)}`,
                walletAddress: entry.walletAddress,
                score: entry.score,
                lines: entry.lines,
                level: entry.level,
                timestamp: entry.timestamp,
                gameType: entry.gameType,
                source: entry.source
            }));
        const tetrisLeaderboard = tetrisScores.map((e, i)=>({
                rank: i + 1,
                txId: e.txId,
                displayAddress: `${e.walletAddress.slice(0, 6)}...${e.walletAddress.slice(-4)}`,
                walletAddress: e.walletAddress,
                score: e.score,
                lines: e.lines,
                level: e.level,
                timestamp: e.timestamp,
                gameType: 'tetris',
                source: e.source
            }));
        const pacmanLeaderboard = pacmanScores.map((e, i)=>({
                rank: i + 1,
                txId: e.txId,
                displayAddress: `${e.walletAddress.slice(0, 6)}...${e.walletAddress.slice(-4)}`,
                walletAddress: e.walletAddress,
                score: e.score,
                lines: e.lines,
                level: e.level,
                timestamp: e.timestamp,
                gameType: 'pacman',
                source: e.source
            }));
        const response = {
            success: true,
            leaderboard: combinedLeaderboard,
            tetris: tetrisLeaderboard,
            pacman: pacmanLeaderboard,
            combined: combinedLeaderboard,
            totals: {
                all: combinedLeaderboard.length,
                tetris: tetrisLeaderboard.length,
                pacman: pacmanLeaderboard.length
            },
            sources: {
                irys: allScores.filter((s)=>s.source === 'Irys').length,
                direct: allScores.filter((s)=>s.source === 'Direct').length
            }
        };
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(response);
    } catch (err) {
        console.error('=== LEADERBOARD ERROR ===', err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            leaderboard: [],
            tetris: [],
            pacman: [],
            combined: [],
            totals: {
                all: 0,
                tetris: 0,
                pacman: 0
            },
            sources: {
                irys: 0,
                direct: 0
            },
            error: err.message
        }, {
            status: 500
        });
    }
}
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__22e43d76._.js.map