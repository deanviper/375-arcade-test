module.exports = {

"[project]/components/CanvasTetris.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>CanvasTetris
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const COLS = 10;
const ROWS = 20;
const BLOCK = 30;
const SHAPES = [
    {
        shape: [
            [
                1,
                1
            ],
            [
                1,
                1
            ]
        ],
        color: '#e74c3c',
        cw: true
    },
    {
        shape: [
            [
                1,
                1,
                1,
                1
            ]
        ],
        color: '#9b59b6',
        cw: true
    },
    {
        shape: [
            [
                0,
                1,
                0
            ],
            [
                1,
                1,
                1
            ]
        ],
        color: '#f1c40f',
        cw: true
    },
    {
        shape: [
            [
                1,
                0,
                0
            ],
            [
                1,
                1,
                1
            ]
        ],
        color: '#1abc9c',
        cw: true
    },
    {
        shape: [
            [
                0,
                0,
                1
            ],
            [
                1,
                1,
                1
            ]
        ],
        color: '#3498db',
        cw: true
    },
    {
        shape: [
            [
                1,
                1,
                0
            ],
            [
                0,
                1,
                1
            ]
        ],
        color: '#e67e22',
        cw: true
    },
    {
        shape: [
            [
                0,
                1,
                1
            ],
            [
                1,
                1,
                0
            ]
        ],
        color: '#2ecc71',
        cw: true
    }
];
function rotateCW(m) {
    const R = m.length, C = m[0].length;
    const res = Array.from({
        length: C
    }, ()=>Array(R).fill(0));
    for(let r = 0; r < R; r++)for(let c = 0; c < C; c++)res[c][R - 1 - r] = m[r][c];
    return res;
}
function CanvasTetris({ onGameOver, start, onPlayAgain, onPublishScore, playerAddress }) {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ctxRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const gridRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(Array.from({
        length: ROWS
    }, ()=>Array(COLS).fill('')));
    const [grid, setGrid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(Array.from({
        length: ROWS
    }, ()=>Array(COLS).fill('')));
    const currentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const nextPieceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const holdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const usedHoldRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [score, setScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [lines, setLines] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [level, setLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const scoreRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const linesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const levelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(1);
    const comboRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const gameOverRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [isGameOver, setIsGameOver] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPublishing, setIsPublishing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        ctxRef.current = canvasRef.current.getContext('2d');
        draw();
    }, []);
    const generatePiece = ()=>{
        const index = Math.floor(Math.random() * SHAPES.length);
        const { shape, color, cw } = SHAPES[index];
        return {
            shape: shape.map((r)=>[
                    ...r
                ]),
            color,
            cw
        };
    };
    const spawn = ()=>{
        let pieceInfo;
        if (!nextPieceRef.current) {
            pieceInfo = generatePiece();
            nextPieceRef.current = generatePiece();
        } else {
            pieceInfo = nextPieceRef.current;
            nextPieceRef.current = generatePiece();
        }
        currentRef.current = {
            x: Math.floor(COLS / 2 - pieceInfo.shape[0].length / 2),
            y: 0,
            shape: pieceInfo.shape,
            color: pieceInfo.color,
            cw: pieceInfo.cw
        };
        usedHoldRef.current = false;
    };
    const collide = (x, y, m)=>m.some((row, dy)=>row.some((v, dx)=>{
                if (!v) return false;
                const nx = x + dx, ny = y + dy;
                return ny < 0 || ny >= ROWS || nx < 0 || nx >= COLS || gridRef.current[ny][nx] !== '';
            }));
    const calculateScore = (linesCleared)=>{
        const basePoints = [
            0,
            40,
            100,
            300,
            1200
        ];
        let points = basePoints[linesCleared] * levelRef.current;
        if (linesCleared > 0) {
            comboRef.current++;
            points += comboRef.current * 50 * levelRef.current;
        } else comboRef.current = 0;
        return points;
    };
    const merge = ()=>{
        const g = gridRef.current.map((r)=>[
                ...r
            ]);
        const cur = currentRef.current;
        cur.shape.forEach((row, dy)=>row.forEach((v, dx)=>{
                if (v && cur.y + dy >= 0 && cur.y + dy < ROWS && cur.x + dx >= 0 && cur.x + dx < COLS) {
                    g[cur.y + dy][cur.x + dx] = cur.color;
                }
            }));
        let cleared = 0;
        for(let r = ROWS - 1; r >= 0; r--){
            if (g[r].every((c)=>c !== '')) {
                g.splice(r, 1);
                g.unshift(Array(COLS).fill(''));
                cleared++;
                r++;
            }
        }
        if (cleared > 0) {
            const newLines = linesRef.current + cleared;
            const scoreIncrease = calculateScore(cleared);
            const newScore = scoreRef.current + scoreIncrease;
            const newLevel = Math.floor(newLines / 4) + 1;
            linesRef.current = newLines;
            scoreRef.current = newScore;
            levelRef.current = newLevel;
            setLines(newLines);
            setScore(newScore);
            setLevel(newLevel);
        } else comboRef.current = 0;
        gridRef.current = g;
        setGrid(g);
    };
    const getDropSpeed = ()=>{
        const base = 700, dec = 60, min = 100;
        return Math.max(min, base - (levelRef.current - 1) * dec);
    };
    const draw = ()=>{
        const ctx = ctxRef.current, cur = currentRef.current;
        if (!ctx || !cur) return;
        ctx.clearRect(0, 0, COLS * BLOCK + 180, ROWS * BLOCK);
        ctx.fillStyle = '#111';
        ctx.fillRect(0, 0, COLS * BLOCK, ROWS * BLOCK);
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 1;
        ctx.strokeRect(0, 0, COLS * BLOCK, ROWS * BLOCK);
        gridRef.current.forEach((row, r)=>row.forEach((c, x)=>{
                if (c) {
                    ctx.fillStyle = c;
                    ctx.fillRect(x * BLOCK, r * BLOCK, BLOCK - 1, BLOCK - 1);
                }
            }));
        let dropY = cur.y;
        while(!collide(cur.x, dropY + 1, cur.shape))dropY++;
        if (dropY !== cur.y) {
            ctx.fillStyle = 'rgba(255,255,255,0.2)';
            cur.shape.forEach((row, dy)=>row.forEach((v, dx)=>{
                    if (v && dropY + dy >= 0 && dropY + dy < ROWS && cur.x + dx >= 0 && cur.x + dx < COLS) {
                        ctx.fillRect((cur.x + dx) * BLOCK, (dropY + dy) * BLOCK, BLOCK - 1, BLOCK - 1);
                    }
                }));
        }
        ctx.fillStyle = cur.color;
        cur.shape.forEach((row, dy)=>row.forEach((v, dx)=>{
                if (v) ctx.fillRect((cur.x + dx) * BLOCK, (cur.y + dy) * BLOCK, BLOCK - 1, BLOCK - 1);
            }));
        const panelWidth = 178;
        const panelX = COLS * BLOCK;
        const centerX = panelX + panelWidth / 2;
        ctx.fillStyle = '#222';
        ctx.fillRect(panelX, 0, panelWidth, ROWS * BLOCK);
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        ctx.strokeRect(panelX, 0, panelWidth, ROWS * BLOCK);
        ctx.fillStyle = '#fff';
        ctx.font = '14px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(`Score: ${scoreRef.current}`, centerX, 25);
        ctx.fillText(`Lines: ${linesRef.current}`, centerX, 45);
        ctx.fillText(`Level: ${levelRef.current}`, centerX, 65);
        if (comboRef.current > 0) {
            ctx.fillStyle = '#f39c12';
            ctx.fillText(`Combo: ${comboRef.current}x`, centerX, 85);
            ctx.fillStyle = '#fff';
        }
        ctx.fillStyle = '#888';
        ctx.font = '10px sans-serif';
        ctx.fillText(`Speed: ${getDropSpeed()}ms`, centerX, 105);
        const boxSize = BLOCK * 3.2;
        const holdX = centerX - boxSize / 2;
        const holdY = 125;
        ctx.strokeStyle = '#666';
        ctx.strokeRect(holdX, holdY, boxSize, boxSize);
        ctx.fillStyle = '#fff';
        ctx.font = '12px sans-serif';
        ctx.fillText('Hold (C)', centerX, holdY - 5);
        if (holdRef.current) {
            const h = holdRef.current;
            const scale = 0.8;
            const pieceWidth = h.shape[0].length * (BLOCK * scale);
            const pieceHeight = h.shape.length * (BLOCK * scale);
            const offsetX = holdX + (boxSize - pieceWidth) / 2;
            const offsetY = holdY + (boxSize - pieceHeight) / 2;
            ctx.fillStyle = h.color;
            h.shape.forEach((row, dy)=>row.forEach((v, dx)=>{
                    if (v) ctx.fillRect(offsetX + dx * (BLOCK * scale), offsetY + dy * (BLOCK * scale), BLOCK * scale - 1, BLOCK * scale - 1);
                }));
        }
        const nextY = holdY + boxSize + 20;
        const nextX = centerX - boxSize / 2;
        ctx.strokeStyle = '#666';
        ctx.strokeRect(nextX, nextY, boxSize, boxSize);
        ctx.fillStyle = '#fff';
        ctx.font = '12px sans-serif';
        ctx.fillText('Next', centerX, nextY - 5);
        if (nextPieceRef.current) {
            const next = nextPieceRef.current;
            const scale = 0.8;
            const pieceWidth = next.shape[0].length * (BLOCK * scale);
            const pieceHeight = next.shape.length * (BLOCK * scale);
            const offsetX = nextX + (boxSize - pieceWidth) / 2;
            const offsetY = nextY + (boxSize - pieceHeight) / 2;
            ctx.fillStyle = next.color;
            next.shape.forEach((row, dy)=>row.forEach((v, dx)=>{
                    if (v) ctx.fillRect(offsetX + dx * (BLOCK * scale), offsetY + dy * (BLOCK * scale), BLOCK * scale - 1, BLOCK * scale - 1);
                }));
        }
        ctx.fillStyle = '#666';
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'center';
        const helpY = nextY + boxSize + 30;
        ctx.fillText('← → Move', centerX, helpY);
        ctx.fillText('↓ Soft Drop', centerX, helpY + 15);
        ctx.fillText('Space Hard Drop', centerX, helpY + 30);
        ctx.fillText('↑ Rotate', centerX, helpY + 45);
        ctx.fillText('C Hold', centerX, helpY + 60);
        ctx.textAlign = 'left';
    };
    const step = ()=>{
        if (gameOverRef.current) return;
        const cur = currentRef.current;
        if (!collide(cur.x, cur.y + 1, cur.shape)) {
            cur.y++;
            draw();
            timerRef.current = window.setTimeout(step, getDropSpeed());
        } else {
            merge();
            spawn();
            if (collide(currentRef.current.x, currentRef.current.y, currentRef.current.shape)) {
                clearTimeout(timerRef.current);
                gameOverRef.current = true;
                setIsGameOver(true);
                onGameOver(scoreRef.current, linesRef.current);
                return;
            }
            draw();
            timerRef.current = window.setTimeout(step, getDropSpeed());
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!ctxRef.current) return;
        const keyState = {
            left: false,
            right: false,
            down: false
        };
        let keyRepeatTimer = null;
        if (start) {
            clearTimeout(timerRef.current);
            gameOverRef.current = false;
            setIsGameOver(false);
            gridRef.current = Array.from({
                length: ROWS
            }, ()=>Array(COLS).fill(''));
            setGrid(gridRef.current);
            scoreRef.current = 0;
            linesRef.current = 0;
            levelRef.current = 1;
            comboRef.current = 0;
            setScore(0);
            setLines(0);
            setLevel(1);
            nextPieceRef.current = undefined;
            holdRef.current = null;
            spawn();
            draw();
        }
        const handleKeyDown = (e)=>{
            if ([
                'ArrowUp',
                'ArrowDown',
                'ArrowLeft',
                'ArrowRight',
                'Space'
            ].includes(e.code)) e.preventDefault();
            if (gameOverRef.current) {
                if (e.code === 'Space' && !isGameOver) setIsGameOver(true);
                return false;
            }
            const cur = currentRef.current;
            if (!cur) return;
            let needsRedraw = false;
            if (e.code === 'ArrowLeft' && !keyState.left) {
                keyState.left = true;
                if (!collide(cur.x - 1, cur.y, cur.shape)) {
                    cur.x--;
                    needsRedraw = true;
                }
                keyRepeatTimer = window.setTimeout(function repeat() {
                    if (keyState.left && !collide(cur.x - 1, cur.y, cur.shape)) {
                        cur.x--;
                        draw();
                    }
                    if (keyState.left) keyRepeatTimer = window.setTimeout(repeat, 50);
                }, 150);
            }
            if (e.code === 'ArrowRight' && !keyState.right) {
                keyState.right = true;
                if (!collide(cur.x + 1, cur.y, cur.shape)) {
                    cur.x++;
                    needsRedraw = true;
                }
                keyRepeatTimer = window.setTimeout(function repeat() {
                    if (keyState.right && !collide(cur.x + 1, cur.y, cur.shape)) {
                        cur.x++;
                        draw();
                    }
                    if (keyState.right) keyRepeatTimer = window.setTimeout(repeat, 50);
                }, 150);
            }
            if (e.code === 'ArrowDown' && !keyState.down) {
                keyState.down = true;
                if (!collide(cur.x, cur.y + 1, cur.shape)) {
                    cur.y++;
                    needsRedraw = true;
                }
                keyRepeatTimer = window.setTimeout(function repeat() {
                    if (keyState.down && !collide(cur.x, cur.y + 1, cur.shape)) {
                        cur.y++;
                        draw();
                    }
                    if (keyState.down) keyRepeatTimer = window.setTimeout(repeat, 30);
                }, 100);
            }
            if (e.code === 'Space') {
                clearTimeout(timerRef.current);
                while(!collide(cur.x, cur.y + 1, cur.shape))cur.y++;
                merge();
                spawn();
                if (collide(currentRef.current.x, currentRef.current.y, currentRef.current.shape)) {
                    gameOverRef.current = true;
                    setIsGameOver(true);
                    onGameOver(scoreRef.current, linesRef.current);
                    return false;
                }
                draw();
                timerRef.current = window.setTimeout(step, getDropSpeed());
                return false;
            }
            if (e.code === 'ArrowUp') {
                const rot = rotateCW(cur.shape);
                if (!collide(cur.x, cur.y, rot)) {
                    cur.shape = rot;
                    needsRedraw = true;
                } else {
                    for (let offset of [
                        -1,
                        1,
                        -2,
                        2
                    ]){
                        if (!collide(cur.x + offset, cur.y, rot)) {
                            cur.x += offset;
                            cur.shape = rot;
                            needsRedraw = true;
                            break;
                        }
                    }
                }
            }
            if (e.code === 'KeyC' && !usedHoldRef.current) {
                if (!holdRef.current) {
                    holdRef.current = {
                        ...cur
                    };
                    spawn();
                } else {
                    const tmp = holdRef.current;
                    holdRef.current = {
                        ...cur
                    };
                    currentRef.current = {
                        x: Math.floor(COLS / 2 - tmp.shape[0].length / 2),
                        y: 0,
                        shape: tmp.shape.map((r)=>[
                                ...r
                            ]),
                        color: tmp.color,
                        cw: tmp.cw
                    };
                }
                usedHoldRef.current = true;
                needsRedraw = true;
            }
            if (needsRedraw) draw();
        };
        const handleKeyUp = (e)=>{
            if (e.code === 'ArrowLeft') {
                keyState.left = false;
                if (keyRepeatTimer) clearTimeout(keyRepeatTimer);
            }
            if (e.code === 'ArrowRight') {
                keyState.right = false;
                if (keyRepeatTimer) clearTimeout(keyRepeatTimer);
            }
            if (e.code === 'ArrowDown') {
                keyState.down = false;
                if (keyRepeatTimer) clearTimeout(keyRepeatTimer);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
        if (start) timerRef.current = window.setTimeout(step, getDropSpeed());
        return ()=>{
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
            clearTimeout(timerRef.current);
            if (keyRepeatTimer) clearTimeout(keyRepeatTimer);
        };
    }, [
        start,
        isGameOver
    ]);
    const handleRestart = ()=>{
        if (onPlayAgain) {
            clearTimeout(timerRef.current);
            setIsGameOver(false);
            gameOverRef.current = false;
            onPlayAgain();
        }
    };
    const handleTweetScore = ()=>{
        const gameType = 'TETRIS';
        const s = scoreRef.current;
        const tweetText = `I scored ${s.toLocaleString()} points on @375ai_ Arcade's ${gameType}! Powered by @irys_xyz blockchain. https://375-arcade.vercel.app/`;
        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
        window.open(url, '_blank');
    };
    const handlePublishScore = async ()=>{
        if (!playerAddress) {
            alert('No wallet connected');
            return;
        }
        setIsPublishing(true);
        try {
            if (!window.ethereum) throw new Error('No wallet found.');
            const data = {
                walletAddress: playerAddress,
                score: scoreRef.current,
                lines: linesRef.current,
                level: levelRef.current,
                timestamp: Date.now(),
                chainId: ("TURBOPACK compile-time value", "1270"),
                gameType: 'tetris',
                version: '1.0'
            };
            const tags = [
                {
                    name: 'Application',
                    value: 'Tetris-Leaderboard'
                },
                {
                    name: 'Type',
                    value: 'Score'
                },
                {
                    name: 'Player',
                    value: playerAddress
                },
                {
                    name: 'Score',
                    value: scoreRef.current.toString()
                },
                {
                    name: 'Lines',
                    value: linesRef.current.toString()
                },
                {
                    name: 'Level',
                    value: levelRef.current.toString()
                },
                {
                    name: 'Timestamp',
                    value: Date.now().toString()
                },
                {
                    name: 'Content-Type',
                    value: 'application/json'
                }
            ];
            const { ethers } = await __turbopack_context__.r("[project]/node_modules/ethers/lib.esm/index.js [app-ssr] (ecmascript, async loader)")(__turbopack_context__.i);
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const message = `Publish Tetris Score: ${scoreRef.current} points, ${linesRef.current} lines at ${Date.now()}`;
            const signature = await signer.signMessage(message);
            const res = await fetch('/api/upload', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    data,
                    tags,
                    signature,
                    message
                })
            });
            const result = await res.json();
            if (result.success) {
                if (onPublishScore) onPublishScore(scoreRef.current, linesRef.current);
                alert(`🎉 Score published to blockchain!\n\nTransaction ID: ${result.txHash}`);
            } else throw new Error(result.error || 'Upload failed');
        } catch (e) {
            if (e.code === 4001) alert('Transaction cancelled by user');
            else if (e.message?.includes('User rejected')) alert('Transaction rejected by user');
            else alert(`Failed to publish score: ${e.message}`);
        } finally{
            setIsPublishing(false);
        }
    };
    const getResponsiveSize = ()=>{
        if ("TURBOPACK compile-time truthy", 1) return {
            scale: 1
        };
        //TURBOPACK unreachable
        ;
        const sw = undefined, sh = undefined;
        const maxW = undefined;
        const maxH = undefined;
        const sx = undefined;
        const sy = undefined;
        const scale = undefined;
    };
    const { scale } = getResponsiveSize();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'relative',
            display: 'inline-block'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                width: COLS * BLOCK + 180,
                height: ROWS * BLOCK,
                style: {
                    background: '#000',
                    border: '2px solid #666',
                    transform: `scale(${scale})`,
                    transformOrigin: 'top left',
                    imageRendering: 'pixelated'
                }
            }, void 0, false, {
                fileName: "[project]/components/CanvasTetris.tsx",
                lineNumber: 496,
                columnNumber: 7
            }, this),
            isGameOver && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    background: 'rgba(0,0,0,0.9)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '24px',
                    fontFamily: 'sans-serif',
                    zIndex: 9999
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        background: '#333',
                        padding: '40px',
                        borderRadius: '10px',
                        textAlign: 'center',
                        border: '2px solid #666',
                        minWidth: '300px',
                        position: 'relative'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsGameOver(false),
                            style: {
                                position: 'absolute',
                                top: '10px',
                                right: '10px',
                                background: 'transparent',
                                border: 'none',
                                color: '#999',
                                fontSize: '24px',
                                cursor: 'pointer',
                                width: '30px',
                                height: '30px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '50%',
                                transition: 'all 0.2s'
                            },
                            onMouseOver: (e)=>{
                                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                                e.currentTarget.style.color = '#fff';
                            },
                            onMouseOut: (e)=>{
                                e.currentTarget.style.background = 'transparent';
                                e.currentTarget.style.color = '#999';
                            },
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/components/CanvasTetris.tsx",
                            lineNumber: 519,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                margin: '0 0 20px 0',
                                color: '#fff'
                            },
                            children: "Game Over!"
                        }, void 0, false, {
                            fileName: "[project]/components/CanvasTetris.tsx",
                            lineNumber: 532,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: '18px',
                                marginBottom: '20px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        "Final Score: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: '#f39c12'
                                            },
                                            children: scoreRef.current
                                        }, void 0, false, {
                                            fileName: "[project]/components/CanvasTetris.tsx",
                                            lineNumber: 534,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CanvasTetris.tsx",
                                    lineNumber: 534,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        "Lines Cleared: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: '#3498db'
                                            },
                                            children: linesRef.current
                                        }, void 0, false, {
                                            fileName: "[project]/components/CanvasTetris.tsx",
                                            lineNumber: 535,
                                            columnNumber: 35
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CanvasTetris.tsx",
                                    lineNumber: 535,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        "Level Reached: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: '#e74c3c'
                                            },
                                            children: levelRef.current
                                        }, void 0, false, {
                                            fileName: "[project]/components/CanvasTetris.tsx",
                                            lineNumber: 536,
                                            columnNumber: 35
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CanvasTetris.tsx",
                                    lineNumber: 536,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CanvasTetris.tsx",
                            lineNumber: 533,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: '10px',
                                justifyContent: 'center',
                                flexWrap: 'wrap'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleRestart,
                                    style: {
                                        padding: '12px 24px',
                                        fontSize: '16px',
                                        background: '#10b981',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '5px',
                                        cursor: 'pointer'
                                    },
                                    children: "Play Again"
                                }, void 0, false, {
                                    fileName: "[project]/components/CanvasTetris.tsx",
                                    lineNumber: 540,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleTweetScore,
                                    style: {
                                        padding: '12px 24px',
                                        fontSize: '16px',
                                        background: '#1DA1F2',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '5px',
                                        cursor: 'pointer'
                                    },
                                    children: "🐦 Tweet Score"
                                }, void 0, false, {
                                    fileName: "[project]/components/CanvasTetris.tsx",
                                    lineNumber: 545,
                                    columnNumber: 15
                                }, this),
                                playerAddress && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handlePublishScore,
                                    disabled: isPublishing,
                                    style: {
                                        padding: '12px 24px',
                                        fontSize: '16px',
                                        background: isPublishing ? '#7f8c8d' : '#6366f1',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '5px',
                                        cursor: isPublishing ? 'not-allowed' : 'pointer',
                                        opacity: isPublishing ? 0.7 : 1
                                    },
                                    children: isPublishing ? '⏳ Publishing...' : '🏆 Publish to Leaderboards'
                                }, void 0, false, {
                                    fileName: "[project]/components/CanvasTetris.tsx",
                                    lineNumber: 551,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CanvasTetris.tsx",
                            lineNumber: 539,
                            columnNumber: 13
                        }, this),
                        isPublishing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginTop: '15px',
                                fontSize: '14px',
                                color: '#95a5a6'
                            },
                            children: "Sign the transaction in your wallet to publish your score to the blockchain"
                        }, void 0, false, {
                            fileName: "[project]/components/CanvasTetris.tsx",
                            lineNumber: 564,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CanvasTetris.tsx",
                    lineNumber: 515,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/CanvasTetris.tsx",
                lineNumber: 510,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/CanvasTetris.tsx",
        lineNumber: 495,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/CanvasPacman.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>CanvasPacman
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const COLS = 19;
const ROWS = 21;
const BLOCK = 20;
const CANVAS_WIDTH = COLS * BLOCK;
const CANVAS_HEIGHT = ROWS * BLOCK;
const MAZE = [
    [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ],
    [
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0
    ],
    [
        0,
        2,
        0,
        0,
        1,
        0,
        0,
        0,
        1,
        0,
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        2,
        0
    ],
    [
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0
    ],
    [
        0,
        1,
        0,
        0,
        1,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        1,
        0,
        0,
        1,
        0
    ],
    [
        0,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        0
    ],
    [
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        3,
        0,
        3,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0
    ],
    [
        3,
        3,
        3,
        0,
        1,
        0,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        0,
        1,
        0,
        3,
        3,
        3
    ],
    [
        0,
        0,
        0,
        0,
        1,
        0,
        3,
        0,
        0,
        3,
        0,
        0,
        3,
        0,
        1,
        0,
        0,
        0,
        0
    ],
    [
        3,
        3,
        3,
        3,
        1,
        3,
        3,
        0,
        3,
        3,
        3,
        0,
        3,
        3,
        1,
        3,
        3,
        3,
        3
    ],
    [
        0,
        0,
        0,
        0,
        1,
        0,
        3,
        0,
        3,
        3,
        3,
        0,
        3,
        0,
        1,
        0,
        0,
        0,
        0
    ],
    [
        3,
        3,
        3,
        0,
        1,
        0,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        0,
        1,
        0,
        3,
        3,
        3
    ],
    [
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        3,
        0,
        3,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0
    ],
    [
        0,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        0
    ],
    [
        0,
        1,
        0,
        0,
        1,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        1,
        0,
        0,
        1,
        0
    ],
    [
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0
    ],
    [
        0,
        2,
        0,
        0,
        1,
        0,
        0,
        0,
        1,
        0,
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        2,
        0
    ],
    [
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0
    ],
    [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ]
];
function CanvasPacman({ onGameOver, start, onPlayAgain, onPublishScore, playerAddress }) {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const gameLoopRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const mazeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(MAZE.map((row)=>[
            ...row
        ]));
    const [isGameOver, setIsGameOver] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPublishing, setIsPublishing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const pacmanRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        x: 9,
        y: 15,
        dir: 'RIGHT',
        nextDir: 'RIGHT',
        moving: true,
        respawning: false,
        respawnTimer: 0,
        animFrame: 0
    });
    const ghostsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([
        {
            x: 9,
            y: 9,
            dir: 'UP',
            color: '#FF0000',
            vulnerable: false,
            originalColor: '#FF0000'
        },
        {
            x: 8,
            y: 10,
            dir: 'LEFT',
            color: '#FFB8FF',
            vulnerable: false,
            originalColor: '#FFB8FF'
        },
        {
            x: 9,
            y: 10,
            dir: 'UP',
            color: '#00FFFF',
            vulnerable: false,
            originalColor: '#00FFFF'
        },
        {
            x: 10,
            y: 10,
            dir: 'RIGHT',
            color: '#FFB847',
            vulnerable: false,
            originalColor: '#FFB847'
        }
    ]);
    const gameStateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        score: 0,
        level: 1,
        lives: 3,
        powerMode: false,
        powerTimer: 0,
        gameOver: false,
        dotsRemaining: 0,
        paused: false,
        frameCount: 0
    });
    const [score, setScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [level, setLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [lives, setLives] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(3);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const dotCount = MAZE.flat().filter((cell)=>cell === 1 || cell === 2).length;
        gameStateRef.current.dotsRemaining = dotCount;
    }, []);
    const canMove = (x, y)=>{
        // Handle tunnel passage ONLY on row 9 (middle row)
        if (y === 9 && (x < 0 || x >= COLS)) {
            return true; // Allow tunnel passage
        }
        if (x < 0 || x >= COLS || y < 0 || y >= ROWS) return false;
        return mazeRef.current[y][x] !== 0;
    };
    const getDirectionOffset = (dir)=>{
        switch(dir){
            case 'UP':
                return {
                    dx: 0,
                    dy: -1
                };
            case 'DOWN':
                return {
                    dx: 0,
                    dy: 1
                };
            case 'LEFT':
                return {
                    dx: -1,
                    dy: 0
                };
            case 'RIGHT':
                return {
                    dx: 1,
                    dy: 0
                };
        }
    };
    const movePacman = ()=>{
        const pacman = pacmanRef.current;
        if (pacman.respawning) {
            pacman.respawnTimer--;
            if (pacman.respawnTimer <= 0) {
                pacman.respawning = false;
                pacman.moving = true;
            }
            return;
        }
        // Smoother (every 2 frames)
        if (gameStateRef.current.frameCount % 2 !== 0) return;
        const nextOffset = getDirectionOffset(pacman.nextDir);
        if (canMove(pacman.x + nextOffset.dx, pacman.y + nextOffset.dy)) {
            pacman.dir = pacman.nextDir;
            pacman.moving = true;
        }
        if (pacman.moving) {
            const offset = getDirectionOffset(pacman.dir);
            const newX = pacman.x + offset.dx;
            const newY = pacman.y + offset.dy;
            if (canMove(newX, newY)) {
                pacman.x = newX;
                pacman.y = newY;
                // Handle tunnel teleportation ONLY on row 9 (middle tunnel)
                if (pacman.y === 9) {
                    if (pacman.x < 0) pacman.x = COLS - 1;
                    if (pacman.x >= COLS) pacman.x = 0;
                }
                const cell = mazeRef.current[pacman.y][pacman.x];
                if (cell === 1) {
                    mazeRef.current[pacman.y][pacman.x] = 3;
                    gameStateRef.current.score += 10;
                    gameStateRef.current.dotsRemaining--;
                    setScore(gameStateRef.current.score);
                } else if (cell === 2) {
                    mazeRef.current[pacman.y][pacman.x] = 3;
                    gameStateRef.current.score += 50;
                    gameStateRef.current.dotsRemaining--;
                    gameStateRef.current.powerMode = true;
                    gameStateRef.current.powerTimer = 120;
                    ghostsRef.current.forEach((g)=>{
                        g.vulnerable = true;
                    });
                    setScore(gameStateRef.current.score);
                }
                pacman.animFrame = (pacman.animFrame + 1) % 8;
            } else {
                pacman.moving = false;
            }
        }
    };
    const moveGhosts = ()=>{
        // Slower ghosts (every 5 frames)
        if (gameStateRef.current.frameCount % 5 !== 0) return;
        ghostsRef.current.forEach((ghost)=>{
            const directions = [
                'UP',
                'DOWN',
                'LEFT',
                'RIGHT'
            ];
            const possibleDirs = directions.filter((dir)=>{
                const offset = getDirectionOffset(dir);
                return canMove(ghost.x + offset.dx, ghost.y + offset.dy);
            });
            if (possibleDirs.length > 0) {
                const pacman = pacmanRef.current;
                const dx = pacman.x - ghost.x;
                const dy = pacman.y - ghost.y;
                let preferredDir;
                if (Math.abs(dx) > Math.abs(dy)) preferredDir = dx > 0 ? 'RIGHT' : 'LEFT';
                else preferredDir = dy > 0 ? 'DOWN' : 'UP';
                if (ghost.vulnerable) {
                    switch(preferredDir){
                        case 'UP':
                            preferredDir = 'DOWN';
                            break;
                        case 'DOWN':
                            preferredDir = 'UP';
                            break;
                        case 'LEFT':
                            preferredDir = 'RIGHT';
                            break;
                        case 'RIGHT':
                            preferredDir = 'LEFT';
                            break;
                    }
                }
                if (possibleDirs.includes(preferredDir) && Math.random() < 0.5) {
                    ghost.dir = preferredDir;
                } else {
                    ghost.dir = possibleDirs[Math.floor(Math.random() * possibleDirs.length)];
                }
            }
            const offset = getDirectionOffset(ghost.dir);
            const newX = ghost.x + offset.dx;
            const newY = ghost.y + offset.dy;
            if (canMove(newX, newY)) {
                ghost.x = newX;
                ghost.y = newY;
                if (ghost.x < 0) ghost.x = COLS - 1;
                if (ghost.x >= COLS) ghost.x = 0;
            }
        });
    };
    const checkCollisions = ()=>{
        const pacman = pacmanRef.current;
        if (pacman.respawning || gameStateRef.current.paused) return;
        ghostsRef.current.forEach((ghost)=>{
            if (ghost.x === pacman.x && ghost.y === pacman.y) {
                if (ghost.vulnerable) {
                    gameStateRef.current.score += 200;
                    setScore(gameStateRef.current.score);
                    ghost.x = 9;
                    ghost.y = 9;
                    ghost.vulnerable = false;
                    ghost.color = ghost.originalColor;
                } else {
                    gameStateRef.current.lives--;
                    setLives(gameStateRef.current.lives);
                    if (gameStateRef.current.lives <= 0) {
                        gameStateRef.current.gameOver = true;
                        setIsGameOver(true);
                        onGameOver(gameStateRef.current.score, gameStateRef.current.level);
                    } else {
                        // Reset positions
                        pacman.x = 9;
                        pacman.y = 15;
                        pacman.dir = 'RIGHT';
                        pacman.nextDir = 'RIGHT';
                        pacman.moving = false;
                        pacman.respawning = true;
                        pacman.respawnTimer = 50; // 1.5 seconds at 60fps
                        pacman.animFrame = 0;
                        // Reset ghosts
                        ghostsRef.current.forEach((g, i)=>{
                            g.x = 9;
                            g.y = 9 + i % 2;
                            g.vulnerable = false;
                            g.color = g.originalColor;
                        });
                        gameStateRef.current.powerMode = false;
                        gameStateRef.current.powerTimer = 0;
                        // Brief pause before resuming
                        gameStateRef.current.paused = true;
                        setTimeout(()=>{
                            if (!gameStateRef.current.gameOver) {
                                gameStateRef.current.paused = false;
                            }
                        }, 1000);
                    }
                }
            }
        });
    };
    const checkLevelComplete = ()=>{
        if (gameStateRef.current.dotsRemaining <= 0) {
            gameStateRef.current.level++;
            gameStateRef.current.score += 1000;
            setLevel(gameStateRef.current.level);
            setScore(gameStateRef.current.score);
            mazeRef.current = MAZE.map((row)=>[
                    ...row
                ]);
            gameStateRef.current.dotsRemaining = MAZE.flat().filter((cell)=>cell === 1 || cell === 2).length;
            const pacman = pacmanRef.current;
            pacman.x = 9;
            pacman.y = 15;
            pacman.dir = 'RIGHT';
            pacman.nextDir = 'RIGHT';
            pacman.moving = true;
            pacman.respawning = false;
            pacman.animFrame = 0;
            ghostsRef.current.forEach((g, i)=>{
                g.x = 9;
                g.y = 9 + i % 2;
                g.vulnerable = false;
                g.color = g.originalColor;
            });
            gameStateRef.current.powerMode = false;
            gameStateRef.current.powerTimer = 0;
        }
    };
    const gameLoop = ()=>{
        if (gameStateRef.current.gameOver) return;
        // Don't process game logic when paused, but continue the loop
        if (!gameStateRef.current.paused) {
            gameStateRef.current.frameCount++;
            movePacman();
            moveGhosts();
            checkCollisions();
            checkLevelComplete();
            if (gameStateRef.current.powerMode) {
                gameStateRef.current.powerTimer--;
                if (gameStateRef.current.powerTimer <= 0) {
                    gameStateRef.current.powerMode = false;
                    ghostsRef.current.forEach((g)=>{
                        g.vulnerable = false;
                        g.color = g.originalColor;
                    });
                }
            }
        }
        draw();
        gameLoopRef.current = window.setTimeout(gameLoop, 50);
    };
    const draw = ()=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        mazeRef.current.forEach((row, y)=>{
            row.forEach((cell, x)=>{
                const px = x * BLOCK;
                const py = y * BLOCK;
                switch(cell){
                    case 0:
                        ctx.fillStyle = '#0000FF';
                        ctx.fillRect(px, py, BLOCK, BLOCK);
                        break;
                    case 1:
                        ctx.fillStyle = '#FFFF00';
                        ctx.beginPath();
                        ctx.arc(px + BLOCK / 2, py + BLOCK / 2, 2, 0, Math.PI * 2);
                        ctx.fill();
                        break;
                    case 2:
                        ctx.fillStyle = '#FFFF00';
                        ctx.beginPath();
                        ctx.arc(px + BLOCK / 2, py + BLOCK / 2, 6, 0, Math.PI * 2);
                        ctx.fill();
                        break;
                }
            });
        });
        const pac = pacmanRef.current;
        const pacX = pac.x * BLOCK + BLOCK / 2;
        const pacY = pac.y * BLOCK + BLOCK / 2;
        if (!pac.respawning || pac.respawnTimer % 10 < 5) {
            ctx.fillStyle = '#FFFF00';
            ctx.beginPath();
            ctx.arc(pacX, pacY, BLOCK / 2 - 2, 0, Math.PI * 2);
            ctx.fill();
            // mouth wedge
            const mouthAngle = Math.PI / 3;
            const mouthOpen = pac.animFrame < 4;
            const actualMouthAngle = mouthOpen ? mouthAngle : Math.PI / 6;
            let startAngle = 0;
            switch(pac.dir){
                case 'RIGHT':
                    startAngle = -actualMouthAngle / 2;
                    break;
                case 'LEFT':
                    startAngle = Math.PI - actualMouthAngle / 2;
                    break;
                case 'UP':
                    startAngle = -Math.PI / 2 - actualMouthAngle / 2;
                    break;
                case 'DOWN':
                    startAngle = Math.PI / 2 - actualMouthAngle / 2;
                    break;
            }
            if (mouthOpen) {
                ctx.fillStyle = '#000';
                ctx.beginPath();
                ctx.moveTo(pacX, pacY);
                ctx.arc(pacX, pacY, BLOCK / 2 - 2, startAngle, startAngle + actualMouthAngle, false);
                ctx.closePath();
                ctx.fill();
            }
        }
        ghostsRef.current.forEach((ghost)=>{
            const gx = ghost.x * BLOCK + BLOCK / 2;
            const gy = ghost.y * BLOCK + BLOCK / 2;
            if (ghost.vulnerable) {
                if (gameStateRef.current.powerTimer < 30 && gameStateRef.current.powerTimer % 8 < 4) {
                    ctx.fillStyle = '#FFF';
                } else {
                    ctx.fillStyle = '#0000FF';
                }
            } else {
                ctx.fillStyle = ghost.originalColor;
            }
            ctx.beginPath();
            ctx.arc(gx, gy - 2, BLOCK / 2 - 2, Math.PI, 0);
            ctx.fillRect(gx - BLOCK / 2 + 2, gy - 2, BLOCK - 4, BLOCK / 2);
            ctx.fill();
            ctx.fillStyle = '#FFF';
            ctx.fillRect(gx - 6, gy - 8, 4, 4);
            ctx.fillRect(gx + 2, gy - 8, 4, 4);
            ctx.fillStyle = '#000';
            ctx.fillRect(gx - 5, gy - 7, 2, 2);
            ctx.fillRect(gx + 3, gy - 7, 2, 2);
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleKeyDown = (e)=>{
            if (gameStateRef.current.gameOver) {
                if (e.code === 'Space' && !isGameOver) setIsGameOver(true);
                return;
            }
            const pac = pacmanRef.current;
            switch(e.code){
                case 'ArrowUp':
                case 'KeyW':
                    e.preventDefault();
                    pac.nextDir = 'UP';
                    if (!pac.moving && !pac.respawning) pac.moving = true;
                    break;
                case 'ArrowDown':
                case 'KeyS':
                    e.preventDefault();
                    pac.nextDir = 'DOWN';
                    if (!pac.moving && !pac.respawning) pac.moving = true;
                    break;
                case 'ArrowLeft':
                case 'KeyA':
                    e.preventDefault();
                    pac.nextDir = 'LEFT';
                    if (!pac.moving && !pac.respawning) pac.moving = true;
                    break;
                case 'ArrowRight':
                case 'KeyD':
                    e.preventDefault();
                    pac.nextDir = 'RIGHT';
                    if (!pac.moving && !pac.respawning) pac.moving = true;
                    break;
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return ()=>window.removeEventListener('keydown', handleKeyDown);
    }, [
        isGameOver
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (start && !gameStateRef.current.gameOver) {
            gameStateRef.current = {
                score: 0,
                level: 1,
                lives: 3,
                powerMode: false,
                powerTimer: 0,
                gameOver: false,
                dotsRemaining: MAZE.flat().filter((cell)=>cell === 1 || cell === 2).length,
                paused: false,
                frameCount: 0
            };
            setScore(0);
            setLevel(1);
            setLives(3);
            setIsGameOver(false);
            mazeRef.current = MAZE.map((row)=>[
                    ...row
                ]);
            pacmanRef.current = {
                x: 9,
                y: 15,
                dir: 'RIGHT',
                nextDir: 'RIGHT',
                moving: true,
                respawning: false,
                respawnTimer: 0,
                animFrame: 0
            };
            ghostsRef.current = [
                {
                    x: 9,
                    y: 9,
                    dir: 'UP',
                    color: '#FF0000',
                    vulnerable: false,
                    originalColor: '#FF0000'
                },
                {
                    x: 8,
                    y: 10,
                    dir: 'LEFT',
                    color: '#FFB8FF',
                    vulnerable: false,
                    originalColor: '#FFB8FF'
                },
                {
                    x: 9,
                    y: 10,
                    dir: 'UP',
                    color: '#00FFFF',
                    vulnerable: false,
                    originalColor: '#00FFFF'
                },
                {
                    x: 10,
                    y: 10,
                    dir: 'RIGHT',
                    color: '#FFB847',
                    vulnerable: false,
                    originalColor: '#FFB847'
                }
            ];
            gameLoopRef.current = window.setTimeout(gameLoop, 50);
        }
        return ()=>{
            if (gameLoopRef.current) clearTimeout(gameLoopRef.current);
        };
    }, [
        start
    ]);
    const handleRestart = ()=>{
        if (onPlayAgain) {
            gameStateRef.current.gameOver = false;
            setIsGameOver(false);
            onPlayAgain();
        }
    };
    const handleTweetScore = ()=>{
        const gameType = 'PACMAN';
        const sc = gameStateRef.current.score;
        const tweetText = `I scored ${sc.toLocaleString()} points on @375ai_ Arcade's ${gameType}! Powered by @irys_xyz blockchain. https://375-arcade.vercel.app/`;
        const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
        window.open(tweetUrl, '_blank');
    };
    const handlePublishScore = async ()=>{
        if (!playerAddress) {
            alert('No wallet connected');
            return;
        }
        setIsPublishing(true);
        try {
            if (!window.ethereum) throw new Error('No wallet found. Please install MetaMask, OKX, or another Web3 wallet.');
            const scoreData = {
                walletAddress: playerAddress,
                score: gameStateRef.current.score,
                level: gameStateRef.current.level,
                timestamp: Date.now(),
                chainId: ("TURBOPACK compile-time value", "1270"),
                gameType: 'pacman',
                version: '1.0'
            };
            const tags = [
                {
                    name: 'Application',
                    value: 'Pacman-Leaderboard'
                },
                {
                    name: 'Type',
                    value: 'Score'
                },
                {
                    name: 'Player',
                    value: playerAddress
                },
                {
                    name: 'Score',
                    value: gameStateRef.current.score.toString()
                },
                {
                    name: 'Level',
                    value: gameStateRef.current.level.toString()
                },
                {
                    name: 'Timestamp',
                    value: Date.now().toString()
                },
                {
                    name: 'Content-Type',
                    value: 'application/json'
                }
            ];
            const { ethers } = await __turbopack_context__.r("[project]/node_modules/ethers/lib.esm/index.js [app-ssr] (ecmascript, async loader)")(__turbopack_context__.i);
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const message = `Publish Pacman Score: ${gameStateRef.current.score} points, level ${gameStateRef.current.level} at ${Date.now()}`;
            const signature = await signer.signMessage(message);
            const response = await fetch('/api/upload', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    data: scoreData,
                    tags,
                    signature,
                    message
                })
            });
            const result = await response.json();
            if (result.success) {
                if (onPublishScore) onPublishScore(gameStateRef.current.score, gameStateRef.current.level);
                alert(`🎉 Score published to blockchain!\n\nTransaction ID: ${result.txHash}\n\nYour Pacman score is now permanently stored on the Irys blockchain!`);
            } else throw new Error(result.error || 'Upload failed');
        } catch (e) {
            if (e.code === 4001) alert('Transaction cancelled by user');
            else if (e.message?.includes('User rejected')) alert('Transaction rejected by user');
            else alert(`Failed to publish score: ${e.message}`);
        } finally{
            setIsPublishing(false);
        }
    };
    const getResponsiveSize = ()=>{
        if ("TURBOPACK compile-time truthy", 1) return {
            scale: 1,
            containerWidth: CANVAS_WIDTH
        };
        //TURBOPACK unreachable
        ;
        const screenWidth = undefined;
        const screenHeight = undefined;
        const maxGameWidth = undefined;
        const maxGameHeight = undefined;
        const scaleX = undefined;
        const scaleY = undefined;
        const scale = undefined;
    };
    const { scale, containerWidth } = getResponsiveSize();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'relative',
            display: 'inline-block'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                width: CANVAS_WIDTH,
                height: CANVAS_HEIGHT,
                style: {
                    background: '#000',
                    border: '2px solid #FFD700',
                    borderRadius: '8px',
                    transform: `scale(${scale})`,
                    transformOrigin: 'top left',
                    imageRendering: 'pixelated'
                }
            }, void 0, false, {
                fileName: "[project]/components/CanvasPacman.tsx",
                lineNumber: 595,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: `${-50 * scale}px`,
                    left: '0',
                    width: `${containerWidth}px`,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: `0 ${8 * scale}px`,
                    color: '#FFFF00',
                    fontFamily: 'monospace',
                    fontSize: `${16 * scale}px`,
                    fontWeight: 'bold',
                    pointerEvents: 'none',
                    transform: `scale(${scale})`,
                    transformOrigin: 'top left'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            "Score: ",
                            score
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CanvasPacman.tsx",
                        lineNumber: 627,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            "Level: ",
                            level
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CanvasPacman.tsx",
                        lineNumber: 628,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px'
                        },
                        children: [
                            "Lives: ",
                            Array.from({
                                length: lives
                            }, (_, i)=>'🧡').join('')
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CanvasPacman.tsx",
                        lineNumber: 629,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CanvasPacman.tsx",
                lineNumber: 610,
                columnNumber: 7
            }, this),
            isGameOver && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    background: 'rgba(0,0,0,0.9)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '24px',
                    fontFamily: 'sans-serif',
                    zIndex: 9999
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        background: '#333',
                        padding: '40px',
                        borderRadius: '10px',
                        textAlign: 'center',
                        border: '2px solid #FFD700',
                        minWidth: '300px',
                        position: 'relative'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setIsGameOver(false);
                            },
                            style: {
                                position: 'absolute',
                                top: '10px',
                                right: '10px',
                                background: 'transparent',
                                border: 'none',
                                color: '#999',
                                fontSize: '24px',
                                cursor: 'pointer',
                                width: '30px',
                                height: '30px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '50%',
                                transition: 'all 0.2s'
                            },
                            onMouseOver: (e)=>{
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                                e.currentTarget.style.color = '#fff';
                            },
                            onMouseOut: (e)=>{
                                e.currentTarget.style.background = 'transparent';
                                e.currentTarget.style.color = '#999';
                            },
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/components/CanvasPacman.tsx",
                            lineNumber: 659,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                margin: '0 0 20px 0',
                                color: '#FFD700'
                            },
                            children: "Game Over!"
                        }, void 0, false, {
                            fileName: "[project]/components/CanvasPacman.tsx",
                            lineNumber: 690,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: '18px',
                                marginBottom: '20px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        "Final Score: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: '#FFFF00'
                                            },
                                            children: gameStateRef.current.score
                                        }, void 0, false, {
                                            fileName: "[project]/components/CanvasPacman.tsx",
                                            lineNumber: 692,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CanvasPacman.tsx",
                                    lineNumber: 692,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        "Level Reached: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: '#FF69B4'
                                            },
                                            children: gameStateRef.current.level
                                        }, void 0, false, {
                                            fileName: "[project]/components/CanvasPacman.tsx",
                                            lineNumber: 693,
                                            columnNumber: 35
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CanvasPacman.tsx",
                                    lineNumber: 693,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CanvasPacman.tsx",
                            lineNumber: 691,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: '10px',
                                justifyContent: 'center',
                                flexWrap: 'wrap'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleRestart,
                                    style: {
                                        padding: '12px 24px',
                                        fontSize: '16px',
                                        background: '#10b981',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '5px',
                                        cursor: 'pointer'
                                    },
                                    children: "Play Again"
                                }, void 0, false, {
                                    fileName: "[project]/components/CanvasPacman.tsx",
                                    lineNumber: 697,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleTweetScore,
                                    style: {
                                        padding: '12px 24px',
                                        fontSize: '16px',
                                        background: '#1DA1F2',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '5px',
                                        cursor: 'pointer'
                                    },
                                    children: "🐦 Tweet Score"
                                }, void 0, false, {
                                    fileName: "[project]/components/CanvasPacman.tsx",
                                    lineNumber: 712,
                                    columnNumber: 15
                                }, this),
                                playerAddress && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handlePublishScore,
                                    disabled: isPublishing,
                                    style: {
                                        padding: '12px 24px',
                                        fontSize: '16px',
                                        background: isPublishing ? '#7f8c8d' : '#6366f1',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '5px',
                                        cursor: isPublishing ? 'not-allowed' : 'pointer',
                                        opacity: isPublishing ? 0.7 : 1
                                    },
                                    children: isPublishing ? '⏳ Publishing...' : '🏆 Publish to Leaderboards'
                                }, void 0, false, {
                                    fileName: "[project]/components/CanvasPacman.tsx",
                                    lineNumber: 728,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CanvasPacman.tsx",
                            lineNumber: 696,
                            columnNumber: 13
                        }, this),
                        isPublishing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginTop: '15px',
                                fontSize: '14px',
                                color: '#95a5a6'
                            },
                            children: "Sign the transaction in your wallet to publish your score to the blockchain"
                        }, void 0, false, {
                            fileName: "[project]/components/CanvasPacman.tsx",
                            lineNumber: 748,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CanvasPacman.tsx",
                    lineNumber: 650,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/CanvasPacman.tsx",
                lineNumber: 635,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/CanvasPacman.tsx",
        lineNumber: 594,
        columnNumber: 5
    }, this);
}
}),
"[project]/utils/responsive.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "getGameContainerScale": ()=>getGameContainerScale,
    "getLeaderboardScale": ()=>getLeaderboardScale,
    "getResponsiveStyles": ()=>getResponsiveStyles
});
const getResponsiveStyles = ()=>{
    if ("TURBOPACK compile-time truthy", 1) {
        return {
            fontSize: '16px',
            padding: '20px',
            cardPadding: '40px',
            titleMaxWidth: '400px'
        };
    }
    //TURBOPACK unreachable
    ;
    const width = undefined;
    const height = undefined;
    // Calculate scale based on both width and height
    const widthScale = undefined;
    const heightScale = undefined;
    const scale = undefined;
};
const getGameContainerScale = ()=>{
    if ("TURBOPACK compile-time truthy", 1) return 1;
    //TURBOPACK unreachable
    ;
    const width = undefined;
    const height = undefined;
    // Calculate available space (minus headers, footers, padding)
    const availableWidth = undefined;
    const availableHeight = undefined;
    // Base game container size
    const baseWidth = undefined;
    const baseHeight = undefined;
    const scaleX = undefined;
    const scaleY = undefined;
};
const getLeaderboardScale = ()=>{
    if ("TURBOPACK compile-time truthy", 1) return {
        width: '320px',
        fontSize: '16px'
    };
    //TURBOPACK unreachable
    ;
    const width = undefined;
    const height = undefined;
};
}),
"[project]/components/layout/NavigationHeader.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>NavigationHeader
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$responsive$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/responsive.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function NavigationHeader({ onHomeClick, onDisconnectWallet, address, isConnected, authed, isOfflineMode }) {
    const responsiveStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$responsive$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getResponsiveStyles"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "126ba4e908db8bbb",
                children: ".header-button-hover.jsx-126ba4e908db8bbb{transition:all .4s cubic-bezier(.4,0,.2,1)!important}.header-button-hover.jsx-126ba4e908db8bbb:hover{background:linear-gradient(135deg,#ff3d144d 0%,#ff3d141a 100%)!important;border:2px solid #ff3d1480!important;transform:translateY(-2px)!important;box-shadow:0 4px 15px #ff3d144d!important}.faucet-button-hover.jsx-126ba4e908db8bbb:hover{background:linear-gradient(135deg,#50ffd64d 0%,#50ffd61a 100%)!important;border:2px solid #50ffd680!important;transform:translateY(-2px)!important;box-shadow:0 4px 15px #50ffd64d!important}.global-button-hover.jsx-126ba4e908db8bbb:hover{background:linear-gradient(135deg,#9ca3af4d 0%,#9ca3af1a 100%)!important;border:2px solid #9ca3af80!important;transform:translateY(-2px)!important;box-shadow:0 4px 15px #9ca3af4d!important}"
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1100,
                    background: 'rgba(8, 8, 12, 0.9)',
                    backdropFilter: 'blur(12px)',
                    borderBottom: '1px solid rgba(80, 255, 214, 0.15)',
                    padding: responsiveStyles.padding,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '10px'
                },
                className: "jsx-126ba4e908db8bbb",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '20px'
                        },
                        className: "jsx-126ba4e908db8bbb",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: '16px',
                                flexWrap: 'wrap'
                            },
                            className: "jsx-126ba4e908db8bbb",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onHomeClick,
                                    style: {
                                        background: 'linear-gradient(135deg, rgba(255, 61, 20, 0.15) 0%, rgba(255, 61, 20, 0.05) 100%)',
                                        border: '2px solid transparent',
                                        borderRadius: '12px',
                                        padding: '10px 20px',
                                        color: '#FF3D14',
                                        fontSize: responsiveStyles.fontSize,
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px'
                                    },
                                    className: "jsx-126ba4e908db8bbb" + " " + "header-button-hover",
                                    children: "Home"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/NavigationHeader.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>window.open('https://irys.xyz/faucet', '_blank'),
                                    style: {
                                        background: 'linear-gradient(135deg, rgba(80, 255, 214, 0.15) 0%, rgba(80, 255, 214, 0.05) 100%)',
                                        border: '2px solid transparent',
                                        borderRadius: '12px',
                                        padding: '10px 20px',
                                        color: '#50FFD6',
                                        fontSize: responsiveStyles.fontSize,
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px'
                                    },
                                    className: "jsx-126ba4e908db8bbb" + " " + "header-button-hover faucet-button-hover",
                                    children: "Faucet"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/NavigationHeader.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>window.open('https://375ai-leaderboards.vercel.app/', '_blank'),
                                    style: {
                                        background: 'linear-gradient(135deg, rgba(156, 163, 175, 0.15) 0%, rgba(156, 163, 175, 0.05) 100%)',
                                        border: '2px solid transparent',
                                        borderRadius: '12px',
                                        padding: '10px 20px',
                                        color: '#9CA3AF',
                                        fontSize: responsiveStyles.fontSize,
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px'
                                    },
                                    className: "jsx-126ba4e908db8bbb" + " " + "header-button-hover global-button-hover",
                                    children: "Global Leaderboards"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/NavigationHeader.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/NavigationHeader.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/layout/NavigationHeader.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    address && isConnected && authed && !isOfflineMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px'
                        },
                        className: "jsx-126ba4e908db8bbb",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: 'linear-gradient(135deg, rgba(80, 255, 214, 0.2) 0%, rgba(80, 255, 214, 0.05) 100%)',
                                    border: '1px solid rgba(80, 255, 214, 0.3)',
                                    borderRadius: '10px',
                                    padding: '8px 16px',
                                    fontSize: '12px',
                                    color: '#50FFD6',
                                    fontFamily: 'Monaco, monospace',
                                    fontWeight: 600,
                                    backdropFilter: 'blur(8px)'
                                },
                                className: "jsx-126ba4e908db8bbb",
                                children: [
                                    address.slice(0, 6),
                                    "...",
                                    address.slice(-4)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/layout/NavigationHeader.tsx",
                                lineNumber: 129,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onDisconnectWallet,
                                style: {
                                    background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(239, 68, 68, 0.05) 100%)',
                                    border: '1px solid rgba(239, 68, 68, 0.3)',
                                    borderRadius: '10px',
                                    padding: '8px 16px',
                                    color: '#EF4444',
                                    fontSize: '12px',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px'
                                },
                                className: "jsx-126ba4e908db8bbb",
                                children: "Disconnect"
                            }, void 0, false, {
                                fileName: "[project]/components/layout/NavigationHeader.tsx",
                                lineNumber: 142,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/layout/NavigationHeader.tsx",
                        lineNumber: 128,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/layout/NavigationHeader.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/components/layout/Footer.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>Footer
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$responsive$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/responsive.ts [app-ssr] (ecmascript)");
'use client';
;
;
function Footer() {
    const responsiveStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$responsive$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getResponsiveStyles"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            bottom: '5px',
            left: responsiveStyles.padding,
            right: responsiveStyles.padding,
            textAlign: 'center',
            zIndex: 500
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: '11px',
                    color: '#B9C1C1',
                    marginBottom: '5px'
                },
                children: [
                    "Made with love by",
                    ' ',
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://x.com/cryptdean",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        style: {
                            color: '#FF3D14',
                            textDecoration: 'none',
                            fontWeight: 600
                        },
                        children: "Dean"
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Footer.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    ". para mi amore, ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                        children: "vivr"
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Footer.tsx",
                        lineNumber: 22,
                        columnNumber: 26
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/layout/Footer.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: '8px',
                    color: '#666',
                    lineHeight: 1.2,
                    maxWidth: '800px',
                    margin: '0 auto'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Disclaimer:"
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Footer.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    " 375 Arcade is not in any way, shape, or form affiliated with the 375ai or Irys team. This is a game made for the community. There will be no financial transactions, solicitations, donations, or anything related to user spending. For official updates visit",
                    ' ',
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://x.com/375ai_",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        style: {
                            color: '#FF3D14',
                            textDecoration: 'none'
                        },
                        children: "375ai"
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Footer.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    ' ',
                    "and",
                    ' ',
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://x.com/irys_xyz",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        style: {
                            color: '#10b981',
                            textDecoration: 'none'
                        },
                        children: "Irys"
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Footer.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/layout/Footer.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/layout/Footer.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ui/LeaderboardPanel.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>LeaderboardPanel
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$responsive$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/responsive.ts [app-ssr] (ecmascript)");
'use client';
;
;
function LeaderboardPanel({ isPaid, isOfflineMode, selectedGame, leaderboard, isLoadingLeaderboard, personalBests, address }) {
    if (!isPaid && !isOfflineMode) return null;
    // Fix: Use specific game leaderboards instead of combined for filtering
    const gameSpecificLeaderboard = selectedGame === 'tetris' ? leaderboard.filter((e)=>e.gameType === 'tetris') : selectedGame === 'pacman' ? leaderboard.filter((e)=>e.gameType === 'pacman') : leaderboard;
    const uniqueLeaderboard = gameSpecificLeaderboard.reduce((acc, cur)=>{
        const existingIndex = acc.findIndex((entry)=>entry.displayAddress === cur.displayAddress || entry.walletAddress === cur.walletAddress);
        if (existingIndex === -1) acc.push(cur);
        else if (cur.score > acc[existingIndex].score) acc[existingIndex] = cur;
        return acc;
    }, []).sort((a, b)=>b.score - a.score);
    const { width: leaderboardWidth, fontSize: leaderboardFontSize } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$responsive$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLeaderboardScale"])();
    const isMobile = "undefined" !== 'undefined' && window.innerWidth < 768;
    const isTablet = "undefined" !== 'undefined' && window.innerWidth >= 768 && window.innerWidth <= 1024;
    const personalBest = selectedGame === 'tetris' ? personalBests.tetris : selectedGame === 'pacman' ? personalBests.pacman : undefined;
    // Calculate responsive padding and spacing
    const containerPadding = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : '16px';
    const headerPadding = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : '20px';
    const itemPadding = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : '12px';
    const itemGap = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : '12px';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            top: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : '70px',
            right: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : '20px',
            width: leaderboardWidth,
            background: 'linear-gradient(135deg, rgba(8, 8, 12, 0.95) 0%, rgba(15, 15, 20, 0.95) 100%)',
            border: '1px solid rgba(255, 61, 20, 0.3)',
            borderRadius: '16px',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 25px 50px -12px rgba(255, 61, 20, 0.4)',
            zIndex: 1000,
            overflow: 'hidden',
            maxHeight: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'calc(100vh - 100px)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'relative',
                    padding: headerPadding,
                    background: 'linear-gradient(135deg, rgba(15, 15, 20, 0.8) 0%, rgba(25, 25, 35, 0.8) 100%)',
                    textAlign: 'center',
                    borderBottom: '1px solid rgba(255, 61, 20, 0.2)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    style: {
                        margin: 0,
                        color: '#E5E7EB',
                        fontSize: leaderboardFontSize,
                        fontWeight: '600',
                        letterSpacing: '0.5px'
                    },
                    children: [
                        "🏆 ",
                        selectedGame === 'tetris' ? 'TETRIS' : selectedGame === 'pacman' ? 'PACMAN' : 'ARCADE',
                        " LEADERBOARD"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/LeaderboardPanel.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/LeaderboardPanel.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            selectedGame && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: containerPadding,
                    borderBottom: '1px solid rgba(255, 61, 20, 0.1)',
                    background: 'rgba(80, 255, 214, 0.02)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: `calc(${leaderboardFontSize} - 2px)`,
                            fontWeight: '600',
                            color: '#50FFD6',
                            marginBottom: '8px',
                            textAlign: 'center'
                        },
                        children: "👤 PERSONAL BEST"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/LeaderboardPanel.tsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this),
                    address && !isOfflineMode ? personalBest ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: itemGap,
                            padding: itemPadding,
                            background: 'rgba(80, 255, 214, 0.1)',
                            border: '1px solid rgba(80, 255, 214, 0.3)',
                            borderRadius: '8px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: leaderboardFontSize,
                                    fontWeight: '600',
                                    minWidth: '28px',
                                    textAlign: 'center',
                                    color: '#50FFD6'
                                },
                                children: "🌟"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/LeaderboardPanel.tsx",
                                lineNumber: 117,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        gap: '8px',
                                        alignItems: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: leaderboardFontSize,
                                                fontWeight: '600',
                                                color: '#50FFD6'
                                            },
                                            children: personalBest.score?.toLocaleString() || '0'
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/LeaderboardPanel.tsx",
                                            lineNumber: 132,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: `calc(${leaderboardFontSize} - 4px)`,
                                                padding: '2px 4px',
                                                background: selectedGame === 'pacman' ? 'rgba(255, 215, 0, 0.1)' : 'rgba(80, 255, 214, 0.1)',
                                                border: `1px solid ${selectedGame === 'pacman' ? 'rgba(255, 215, 0, 0.2)' : 'rgba(80, 255, 214, 0.2)'}`,
                                                borderRadius: '4px',
                                                color: selectedGame === 'pacman' ? '#FFD700' : '#50FFD6'
                                            },
                                            children: selectedGame === 'pacman' ? `Lv.${personalBest.level}` : `L.${personalBest.lines}`
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/LeaderboardPanel.tsx",
                                            lineNumber: 139,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ui/LeaderboardPanel.tsx",
                                    lineNumber: 127,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ui/LeaderboardPanel.tsx",
                                lineNumber: 126,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/LeaderboardPanel.tsx",
                        lineNumber: 108,
                        columnNumber: 15
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'center',
                            color: '#6B7280',
                            fontSize: `calc(${leaderboardFontSize} - 2px)`,
                            padding: itemPadding,
                            background: 'rgba(107, 114, 128, 0.1)',
                            borderRadius: '8px'
                        },
                        children: "No score recorded yet"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/LeaderboardPanel.tsx",
                        lineNumber: 153,
                        columnNumber: 15
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: itemPadding,
                            background: 'rgba(107, 114, 128, 0.1)',
                            border: '1px solid rgba(107, 114, 128, 0.2)',
                            borderRadius: '8px',
                            filter: 'blur(4px)',
                            textAlign: 'center',
                            color: '#6B7280',
                            fontSize: `calc(${leaderboardFontSize} - 2px)`
                        },
                        children: "Connect wallet to view"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/LeaderboardPanel.tsx",
                        lineNumber: 165,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/LeaderboardPanel.tsx",
                lineNumber: 92,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: containerPadding,
                    maxHeight: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : '250px',
                    overflowY: 'auto'
                },
                children: isLoadingLeaderboard ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: 'center',
                        color: '#6B7280',
                        padding: '20px',
                        fontSize: leaderboardFontSize
                    },
                    children: "Loading..."
                }, void 0, false, {
                    fileName: "[project]/components/ui/LeaderboardPanel.tsx",
                    lineNumber: 187,
                    columnNumber: 11
                }, this) : uniqueLeaderboard.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: 'center',
                        color: '#6B7280',
                        padding: '20px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: '24px',
                                marginBottom: '10px'
                            },
                            children: "🎯"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/LeaderboardPanel.tsx",
                            lineNumber: 197,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: leaderboardFontSize
                            },
                            children: "No scores yet!"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/LeaderboardPanel.tsx",
                            lineNumber: 198,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: `calc(${leaderboardFontSize} - 2px)`,
                                marginTop: '5px'
                            },
                            children: "Be the first to publish to blockchain!"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/LeaderboardPanel.tsx",
                            lineNumber: 199,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/LeaderboardPanel.tsx",
                    lineNumber: 196,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px'
                    },
                    children: uniqueLeaderboard.slice(0, 10).map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: itemGap,
                                padding: itemPadding,
                                background: 'rgba(15, 15, 20, 0.4)',
                                border: '1px solid rgba(55, 65, 81, 0.3)',
                                borderRadius: '8px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: leaderboardFontSize,
                                        fontWeight: '600',
                                        minWidth: '28px',
                                        textAlign: 'center',
                                        color: '#E5E7EB'
                                    },
                                    children: index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `#${index + 1}`
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/LeaderboardPanel.tsx",
                                    lineNumber: 215,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        flex: 1
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontFamily: 'Monaco, Menlo, monospace',
                                                fontSize: `calc(${leaderboardFontSize} - 3px)`,
                                                color: '#9CA3AF',
                                                marginBottom: '2px'
                                            },
                                            children: entry.displayAddress
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/LeaderboardPanel.tsx",
                                            lineNumber: 225,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                gap: '8px',
                                                alignItems: 'center'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: leaderboardFontSize,
                                                        fontWeight: '600',
                                                        color: '#50FFD6'
                                                    },
                                                    children: entry.score?.toLocaleString() || '0'
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ui/LeaderboardPanel.tsx",
                                                    lineNumber: 234,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: `calc(${leaderboardFontSize} - 4px)`,
                                                        padding: '2px 4px',
                                                        background: selectedGame === 'pacman' ? 'rgba(255, 215, 0, 0.1)' : 'rgba(80, 255, 214, 0.1)',
                                                        border: `1px solid ${selectedGame === 'pacman' ? 'rgba(255, 215, 0, 0.2)' : 'rgba(80, 255, 214, 0.2)'}`,
                                                        borderRadius: '4px',
                                                        color: selectedGame === 'pacman' ? '#FFD700' : '#50FFD6'
                                                    },
                                                    children: selectedGame === 'pacman' ? '🍒 PAC' : '🧱 TET'
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ui/LeaderboardPanel.tsx",
                                                    lineNumber: 241,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ui/LeaderboardPanel.tsx",
                                            lineNumber: 233,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ui/LeaderboardPanel.tsx",
                                    lineNumber: 224,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, `entry-${index}`, true, {
                            fileName: "[project]/components/ui/LeaderboardPanel.tsx",
                            lineNumber: 206,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/ui/LeaderboardPanel.tsx",
                    lineNumber: 204,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/LeaderboardPanel.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/LeaderboardPanel.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
}),
"[project]/constants/index.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "GAMES": ()=>GAMES,
    "IRYS_PARAMS": ()=>IRYS_PARAMS,
    "STORAGE_KEYS": ()=>STORAGE_KEYS
});
const STORAGE_KEYS = {
    WALLET_ADDRESS: 'arcade_wallet_address',
    IS_AUTHENTICATED: 'arcade_is_authenticated',
    IS_PAID: 'arcade_is_paid',
    SELECTED_GAME: 'arcade_selected_game'
};
const IRYS_PARAMS = {
    chainId: '0x4F6',
    chainName: 'Irys Testnet',
    rpcUrls: [
        'https://testnet-rpc.irys.xyz/v1/execution-rpc'
    ],
    nativeCurrency: {
        name: 'Irys',
        symbol: 'IRYS',
        decimals: 18
    },
    blockExplorerUrls: [
        'https://testnet-explorer.irys.xyz'
    ]
};
const GAMES = [
    {
        id: 'tetris',
        name: 'TETRIS',
        icon: '/blocks.png',
        description: 'Play a classic game of Tetris for 0.01 Irys!',
        borderColor: '#50FFD6'
    },
    {
        id: 'pacman',
        name: 'PACMAN',
        icon: '/pacman.png',
        description: 'Play the classic Pacman for 0.01 Irys!',
        borderColor: '#FFD700'
    },
    {
        id: null,
        name: 'COMING SOON',
        icon: '🎲',
        description: 'More games coming soon!',
        borderColor: '#FF3D14'
    }
];
}),
"[project]/components/ui/GameCarousel.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>GameCarousel
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$responsive$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/responsive.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function GameCarousel({ onGameSelect, onWalletConnection, onOfflinePlay, isProcessingPayment, showPaymentButtons = false }) {
    const [carouselIndex, setCarouselIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const responsiveStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$responsive$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getResponsiveStyles"])();
    const currentGame = __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GAMES"][carouselIndex];
    const leftGame = __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GAMES"][(carouselIndex - 1 + __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GAMES"].length) % __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GAMES"].length];
    const rightGame = __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GAMES"][(carouselIndex + 1) % __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GAMES"].length];
    const handleCarouselNext = ()=>setCarouselIndex((prev)=>(prev + 1) % __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GAMES"].length);
    const handleCarouselPrev = ()=>setCarouselIndex((prev)=>(prev - 1 + __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GAMES"].length) % __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GAMES"].length);
    const cardStyle = {
        background: 'linear-gradient(135deg, rgba(8, 8, 12, 0.9) 0%, rgba(25, 25, 35, 0.9) 100%)',
        border: '2px solid rgba(80, 255, 214, 0.3)',
        borderRadius: '20px',
        padding: responsiveStyles.cardPadding,
        backdropFilter: 'blur(12px)',
        boxShadow: '0 25px 50px -12px rgba(80, 255, 214, 0.2)',
        textAlign: 'center',
        transition: 'all 0.3s ease'
    };
    const buttonStyle = {
        background: 'linear-gradient(135deg, #FF3D14 0%, #50FFD6 100%)',
        border: 'none',
        borderRadius: '12px',
        padding: '16px 32px',
        color: 'white',
        fontSize: responsiveStyles.fontSize,
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.2s',
        boxShadow: '0 4px 15px rgba(80, 255, 214, 0.4)',
        minWidth: '200px'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "78a140f9cbc2acab",
                children: ".carousel-transition.jsx-78a140f9cbc2acab{transition:all .8s cubic-bezier(.25,.46,.45,.94)!important}.carousel-game-center.jsx-78a140f9cbc2acab,.carousel-game-side.jsx-78a140f9cbc2acab{flex-direction:column;justify-content:center;align-items:center;display:flex;height:450px!important}@media (width<=768px){.carousel-container.jsx-78a140f9cbc2acab{flex-direction:column!important;gap:20px!important}.carousel-game-center.jsx-78a140f9cbc2acab,.carousel-game-side.jsx-78a140f9cbc2acab{min-width:250px!important;max-width:280px!important;height:350px!important}}@media (width>=481px) and (width<=768px){.tablet-adjustments.jsx-78a140f9cbc2acab{transform:scale(.5)!important}.carousel-game-center.jsx-78a140f9cbc2acab,.carousel-game-side.jsx-78a140f9cbc2acab{min-width:200px!important;max-width:220px!important;height:180px!important}}@keyframes pulse{0%,to{transform:scale(1.05)}50%{transform:scale(1.1)}}"
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    gap: '24px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    minHeight: '400px'
                },
                className: "jsx-78a140f9cbc2acab" + " " + "carousel-container tablet-adjustments",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleCarouselPrev,
                        style: {
                            position: 'absolute',
                            left: '50px',
                            zIndex: 10,
                            background: 'rgba(255, 61, 20, 0.2)',
                            border: '2px solid rgba(255, 61, 20, 0.5)',
                            borderRadius: '50%',
                            width: '60px',
                            height: '60px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            fontSize: '24px',
                            color: '#FF3D14',
                            transition: 'all 0.3s ease'
                        },
                        className: "jsx-78a140f9cbc2acab",
                        children: "←"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/GameCarousel.tsx",
                        lineNumber: 100,
                        columnNumber: 8
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            ...cardStyle,
                            minWidth: '280px',
                            maxWidth: '300px',
                            height: showPaymentButtons ? '450px' : '360px',
                            opacity: 0.4,
                            filter: 'blur(2px)',
                            border: '2px solid rgba(255, 61, 20, 0.4)',
                            boxShadow: '0 25px 50px -12px rgba(255, 61, 20, 0.3)',
                            transform: 'scale(0.8)',
                            pointerEvents: 'none'
                        },
                        className: "jsx-78a140f9cbc2acab" + " " + "carousel-game-side carousel-transition",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: '80px',
                                    height: '80px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '20px',
                                    margin: '0 auto 20px auto'
                                },
                                className: "jsx-78a140f9cbc2acab",
                                children: leftGame.icon.startsWith('/') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: leftGame.icon,
                                    alt: leftGame.name,
                                    style: {
                                        maxWidth: '100%',
                                        maxHeight: '100%',
                                        objectFit: 'contain'
                                    },
                                    className: "jsx-78a140f9cbc2acab"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/GameCarousel.tsx",
                                    lineNumber: 145,
                                    columnNumber: 14
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: '76px',
                                        lineHeight: 1
                                    },
                                    className: "jsx-78a140f9cbc2acab",
                                    children: leftGame.icon
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/GameCarousel.tsx",
                                    lineNumber: 147,
                                    columnNumber: 14
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ui/GameCarousel.tsx",
                                lineNumber: 135,
                                columnNumber: 10
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    color: '#9CA3AF',
                                    margin: 0,
                                    fontSize: '28px',
                                    textAlign: 'center'
                                },
                                className: "jsx-78a140f9cbc2acab",
                                children: leftGame.name
                            }, void 0, false, {
                                fileName: "[project]/components/ui/GameCarousel.tsx",
                                lineNumber: 150,
                                columnNumber: 10
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/GameCarousel.tsx",
                        lineNumber: 123,
                        columnNumber: 8
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            ...cardStyle,
                            minWidth: '400px',
                            maxWidth: '440px',
                            height: showPaymentButtons ? '450px' : '360px',
                            border: `3px solid ${currentGame.borderColor}`,
                            boxShadow: `0 25px 50px -12px ${currentGame.borderColor}40`,
                            transform: 'scale(1.05)'
                        },
                        className: "jsx-78a140f9cbc2acab" + " " + "carousel-game-center carousel-transition",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: showPaymentButtons ? '100px' : '120px',
                                    height: showPaymentButtons ? '100px' : '120px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: showPaymentButtons ? '25px' : '16px',
                                    margin: `0 auto ${showPaymentButtons ? '25px' : '16px'} auto`
                                },
                                className: "jsx-78a140f9cbc2acab",
                                children: currentGame.icon.startsWith('/') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: currentGame.icon,
                                    alt: currentGame.name,
                                    style: {
                                        maxWidth: '100%',
                                        maxHeight: '100%',
                                        objectFit: 'contain'
                                    },
                                    className: "jsx-78a140f9cbc2acab"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/GameCarousel.tsx",
                                    lineNumber: 172,
                                    columnNumber: 14
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: showPaymentButtons ? '96px' : '110px',
                                        lineHeight: 1
                                    },
                                    className: "jsx-78a140f9cbc2acab",
                                    children: currentGame.icon
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/GameCarousel.tsx",
                                    lineNumber: 174,
                                    columnNumber: 14
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ui/GameCarousel.tsx",
                                lineNumber: 162,
                                columnNumber: 10
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: showPaymentButtons ? '32px' : '36px',
                                    marginBottom: '15px',
                                    color: currentGame.borderColor,
                                    fontWeight: 700,
                                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                                    textAlign: 'center'
                                },
                                className: "jsx-78a140f9cbc2acab",
                                children: currentGame.name
                            }, void 0, false, {
                                fileName: "[project]/components/ui/GameCarousel.tsx",
                                lineNumber: 177,
                                columnNumber: 10
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    marginBottom: showPaymentButtons ? '20px' : '30px',
                                    color: '#9CA3AF',
                                    fontSize: responsiveStyles.fontSize,
                                    textAlign: 'center'
                                },
                                className: "jsx-78a140f9cbc2acab",
                                children: currentGame.description
                            }, void 0, false, {
                                fileName: "[project]/components/ui/GameCarousel.tsx",
                                lineNumber: 187,
                                columnNumber: 10
                            }, this),
                            currentGame.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '15px',
                                    alignItems: 'center'
                                },
                                className: "jsx-78a140f9cbc2acab",
                                children: !showPaymentButtons ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            style: {
                                                ...buttonStyle,
                                                animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                                            },
                                            onClick: onWalletConnection,
                                            className: "jsx-78a140f9cbc2acab",
                                            children: "🔗 Connect Wallet & Play"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/GameCarousel.tsx",
                                            lineNumber: 195,
                                            columnNumber: 18
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: '13px',
                                                color: '#9CA3AF',
                                                margin: '10px 0 5px',
                                                textAlign: 'center'
                                            },
                                            className: "jsx-78a140f9cbc2acab",
                                            children: "Don't want to connect your wallet and publish your scores? No worries!"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/GameCarousel.tsx",
                                            lineNumber: 201,
                                            columnNumber: 18
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            style: {
                                                background: 'rgba(25, 25, 35, 0.5)',
                                                border: '2px solid rgba(107, 114, 128, 0.3)',
                                                borderRadius: '12px',
                                                padding: '12px 24px',
                                                color: '#9CA3AF',
                                                fontSize: '14px',
                                                fontWeight: 500,
                                                cursor: 'pointer',
                                                transition: 'all 0.2s',
                                                minWidth: '200px'
                                            },
                                            onClick: ()=>onOfflinePlay(currentGame.id),
                                            className: "jsx-78a140f9cbc2acab",
                                            children: "Just Play"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/GameCarousel.tsx",
                                            lineNumber: 204,
                                            columnNumber: 18
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    style: {
                                        ...buttonStyle,
                                        animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                                        ...isProcessingPayment ? {
                                            opacity: 0.7,
                                            cursor: 'not-allowed'
                                        } : {}
                                    },
                                    onClick: ()=>onGameSelect(currentGame.id),
                                    disabled: isProcessingPayment,
                                    className: "jsx-78a140f9cbc2acab",
                                    children: isProcessingPayment ? '⏳ Processing...' : `Play ${currentGame.name}`
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/GameCarousel.tsx",
                                    lineNumber: 223,
                                    columnNumber: 16
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ui/GameCarousel.tsx",
                                lineNumber: 192,
                                columnNumber: 12
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/GameCarousel.tsx",
                        lineNumber: 153,
                        columnNumber: 8
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            ...cardStyle,
                            minWidth: '280px',
                            maxWidth: '300px',
                            height: showPaymentButtons ? '450px' : '360px',
                            opacity: 0.4,
                            filter: 'blur(2px)',
                            border: '2px solid rgba(255, 61, 20, 0.4)',
                            boxShadow: '0 25px 50px -12px rgba(255, 61, 20, 0.3)',
                            transform: 'scale(0.8)',
                            pointerEvents: 'none'
                        },
                        className: "jsx-78a140f9cbc2acab" + " " + "carousel-game-side carousel-transition",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: '80px',
                                    height: '80px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '20px',
                                    margin: '0 auto 20px auto'
                                },
                                className: "jsx-78a140f9cbc2acab",
                                children: rightGame.icon.startsWith('/') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: rightGame.icon,
                                    alt: rightGame.name,
                                    style: {
                                        maxWidth: '100%',
                                        maxHeight: '100%',
                                        objectFit: 'contain'
                                    },
                                    className: "jsx-78a140f9cbc2acab"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/GameCarousel.tsx",
                                    lineNumber: 261,
                                    columnNumber: 14
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: '76px',
                                        lineHeight: 1
                                    },
                                    className: "jsx-78a140f9cbc2acab",
                                    children: rightGame.icon
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/GameCarousel.tsx",
                                    lineNumber: 263,
                                    columnNumber: 14
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ui/GameCarousel.tsx",
                                lineNumber: 251,
                                columnNumber: 10
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    color: '#9CA3AF',
                                    margin: 0,
                                    fontSize: '28px',
                                    textAlign: 'center'
                                },
                                className: "jsx-78a140f9cbc2acab",
                                children: rightGame.name
                            }, void 0, false, {
                                fileName: "[project]/components/ui/GameCarousel.tsx",
                                lineNumber: 266,
                                columnNumber: 10
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/GameCarousel.tsx",
                        lineNumber: 239,
                        columnNumber: 8
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleCarouselNext,
                        style: {
                            position: 'absolute',
                            right: '50px',
                            zIndex: 10,
                            background: 'rgba(255, 61, 20, 0.2)',
                            border: '2px solid rgba(255, 61, 20, 0.5)',
                            borderRadius: '50%',
                            width: '60px',
                            height: '60px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            fontSize: '24px',
                            color: '#FF3D14',
                            transition: 'all 0.3s ease'
                        },
                        className: "jsx-78a140f9cbc2acab",
                        children: "→"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/GameCarousel.tsx",
                        lineNumber: 269,
                        columnNumber: 8
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/GameCarousel.tsx",
                lineNumber: 92,
                columnNumber: 6
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/components/modals/AuthenticationModal.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>AuthenticationModal
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$responsive$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/responsive.ts [app-ssr] (ecmascript)");
'use client';
;
;
function AuthenticationModal({ address, onAuthenticate }) {
    const responsiveStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$responsive$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getResponsiveStyles"])();
    const containerStyle = {
        minHeight: '100vh',
        maxHeight: '100vh',
        background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #2a2a2a 100%)',
        color: 'white',
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
        overflow: 'hidden'
    };
    const cardStyle = {
        background: 'linear-gradient(135deg, rgba(8, 8, 12, 0.9) 0%, rgba(25, 25, 35, 0.9) 100%)',
        border: '2px solid rgba(80, 255, 214, 0.3)',
        borderRadius: '20px',
        padding: responsiveStyles.cardPadding,
        backdropFilter: 'blur(12px)',
        boxShadow: '0 25px 50px -12px rgba(80, 255, 214, 0.2)',
        textAlign: 'center',
        transition: 'all 0.3s ease'
    };
    const buttonStyle = {
        background: 'linear-gradient(135deg, #FF3D14 0%, #50FFD6 100%)',
        border: 'none',
        borderRadius: '12px',
        padding: '16px 32px',
        color: 'white',
        fontSize: responsiveStyles.fontSize,
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.2s',
        boxShadow: '0 4px 15px rgba(80, 255, 214, 0.4)',
        minWidth: '200px'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: containerStyle,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                padding: '100px 20px 40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: cardStyle,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '48px',
                            marginBottom: '20px'
                        },
                        children: "✍️"
                    }, void 0, false, {
                        fileName: "[project]/components/modals/AuthenticationModal.tsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            marginBottom: '20px'
                        },
                        children: "Authentication Required"
                    }, void 0, false, {
                        fileName: "[project]/components/modals/AuthenticationModal.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            marginBottom: '10px',
                            color: '#B9C1C1'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Connected:"
                            }, void 0, false, {
                                fileName: "[project]/components/modals/AuthenticationModal.tsx",
                                lineNumber: 53,
                                columnNumber: 65
                            }, this),
                            " ",
                            address?.slice(0, 6),
                            "...",
                            address?.slice(-4)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/modals/AuthenticationModal.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            marginBottom: '30px',
                            color: '#B9C1C1'
                        },
                        children: "Sign a message to verify your identity"
                    }, void 0, false, {
                        fileName: "[project]/components/modals/AuthenticationModal.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        style: buttonStyle,
                        onClick: onAuthenticate,
                        children: "🔐 Sign Message"
                    }, void 0, false, {
                        fileName: "[project]/components/modals/AuthenticationModal.tsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/modals/AuthenticationModal.tsx",
                lineNumber: 50,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/modals/AuthenticationModal.tsx",
            lineNumber: 49,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/modals/AuthenticationModal.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/modals/NetworkSwitchModal.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>NetworkSwitchModal
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$responsive$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/responsive.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function NetworkSwitchModal() {
    const responsiveStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$responsive$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getResponsiveStyles"])();
    const containerStyle = {
        minHeight: '100vh',
        maxHeight: '100vh',
        background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #2a2a2a 100%)',
        color: 'white',
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
        overflow: 'hidden'
    };
    const cardStyle = {
        background: 'linear-gradient(135deg, rgba(8, 8, 12, 0.9) 0%, rgba(25, 25, 35, 0.9) 100%)',
        border: '2px solid rgba(80, 255, 214, 0.3)',
        borderRadius: '20px',
        padding: responsiveStyles.cardPadding,
        backdropFilter: 'blur(12px)',
        boxShadow: '0 25px 50px -12px rgba(80, 255, 214, 0.2)',
        textAlign: 'center',
        transition: 'all 0.3s ease'
    };
    const buttonStyle = {
        background: 'linear-gradient(135deg, #FF3D14 0%, #50FFD6 100%)',
        border: 'none',
        borderRadius: '12px',
        padding: '16px 32px',
        color: 'white',
        fontSize: responsiveStyles.fontSize,
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.2s',
        boxShadow: '0 4px 15px rgba(80, 255, 214, 0.4)',
        minWidth: '200px'
    };
    const handleNetworkSwitch = async ()=>{
        const ethereum = window.ethereum;
        if (!ethereum) {
            alert('No wallet found. Please install MetaMask, OKX, or another Web3 wallet.');
            return;
        }
        try {
            await ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IRYS_PARAMS"]
                ]
            });
        } catch (e) {
            console.log('Add network failed:', e);
        }
        try {
            await ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [
                    {
                        chainId: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IRYS_PARAMS"].chainId
                    }
                ]
            });
        } catch (e) {
            if (e.code === 4001) alert('Network switch cancelled by user');
            else alert('Failed to switch network: ' + e.message);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: containerStyle,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                padding: '100px 20px 40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: cardStyle,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '48px',
                            marginBottom: '20px'
                        },
                        children: "⚠️"
                    }, void 0, false, {
                        fileName: "[project]/components/modals/NetworkSwitchModal.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            marginBottom: '20px',
                            color: '#FF3D14'
                        },
                        children: "Wrong Network"
                    }, void 0, false, {
                        fileName: "[project]/components/modals/NetworkSwitchModal.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            marginBottom: '30px',
                            color: '#B9C1C1'
                        },
                        children: [
                            "Please switch to ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Irys Testnet"
                            }, void 0, false, {
                                fileName: "[project]/components/modals/NetworkSwitchModal.tsx",
                                lineNumber: 68,
                                columnNumber: 82
                            }, this),
                            " to continue"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/modals/NetworkSwitchModal.tsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        style: buttonStyle,
                        onClick: handleNetworkSwitch,
                        children: "Switch to Irys Testnet"
                    }, void 0, false, {
                        fileName: "[project]/components/modals/NetworkSwitchModal.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/modals/NetworkSwitchModal.tsx",
                lineNumber: 65,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/modals/NetworkSwitchModal.tsx",
            lineNumber: 64,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/modals/NetworkSwitchModal.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/modals/MobileWarningModal.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>MobileWarningModal
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$responsive$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/responsive.ts [app-ssr] (ecmascript)");
'use client';
;
;
function MobileWarningModal({ leaderboard }) {
    const responsiveStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$responsive$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getResponsiveStyles"])();
    const containerStyle = {
        minHeight: '100vh',
        maxHeight: '100vh',
        background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #2a2a2a 100%)',
        color: 'white',
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
        overflow: 'hidden'
    };
    const cardStyle = {
        background: 'linear-gradient(135deg, rgba(8, 8, 12, 0.9) 0%, rgba(25, 25, 35, 0.9) 100%)',
        border: '2px solid rgba(80, 255, 214, 0.3)',
        borderRadius: '20px',
        padding: responsiveStyles.cardPadding,
        backdropFilter: 'blur(12px)',
        boxShadow: '0 25px 50px -12px rgba(80, 255, 214, 0.2)',
        textAlign: 'center',
        transition: 'all 0.3s ease'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: containerStyle,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                padding: '100px 20px',
                textAlign: 'center',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: cardStyle,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '48px',
                            marginBottom: '20px'
                        },
                        children: "📱"
                    }, void 0, false, {
                        fileName: "[project]/components/modals/MobileWarningModal.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            marginBottom: '20px',
                            color: '#FF3D14'
                        },
                        children: "Mobile Device Detected"
                    }, void 0, false, {
                        fileName: "[project]/components/modals/MobileWarningModal.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            marginBottom: '20px',
                            color: '#B9C1C1'
                        },
                        children: "For the best gaming experience, please switch to a PC or desktop computer."
                    }, void 0, false, {
                        fileName: "[project]/components/modals/MobileWarningModal.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '14px',
                            color: '#9CA3AF',
                            lineHeight: 1.6
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: '15px'
                                },
                                children: [
                                    "🏆 ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Top Tetris Players:"
                                    }, void 0, false, {
                                        fileName: "[project]/components/modals/MobileWarningModal.tsx",
                                        lineNumber: 41,
                                        columnNumber: 54
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/modals/MobileWarningModal.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this),
                            leaderboard.filter((e)=>e.gameType === 'tetris').slice(0, 3).map((entry, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: '8px'
                                    },
                                    children: [
                                        i === 0 ? '🥇' : i === 1 ? '🥈' : '🥉',
                                        " ",
                                        entry.displayAddress,
                                        ": ",
                                        entry.score?.toLocaleString()
                                    ]
                                }, i, true, {
                                    fileName: "[project]/components/modals/MobileWarningModal.tsx",
                                    lineNumber: 43,
                                    columnNumber: 15
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: '20px',
                                    marginBottom: '15px'
                                },
                                children: [
                                    "🍒 ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Top Pacman Players:"
                                    }, void 0, false, {
                                        fileName: "[project]/components/modals/MobileWarningModal.tsx",
                                        lineNumber: 47,
                                        columnNumber: 73
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/modals/MobileWarningModal.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this),
                            leaderboard.filter((e)=>e.gameType === 'pacman').slice(0, 3).map((entry, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: '8px'
                                    },
                                    children: [
                                        i === 0 ? '🥇' : i === 1 ? '🥈' : '🥉',
                                        " ",
                                        entry.displayAddress,
                                        ": ",
                                        entry.score?.toLocaleString()
                                    ]
                                }, i, true, {
                                    fileName: "[project]/components/modals/MobileWarningModal.tsx",
                                    lineNumber: 49,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/modals/MobileWarningModal.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/modals/MobileWarningModal.tsx",
                lineNumber: 36,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/modals/MobileWarningModal.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/modals/MobileWarningModal.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ui/GameReadyScreen.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>GameReadyScreen
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$responsive$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/responsive.ts [app-ssr] (ecmascript)");
'use client';
;
;
function GameReadyScreen({ selectedGame, address, isOfflineMode }) {
    const responsiveStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$responsive$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getResponsiveStyles"])();
    const containerStyle = {
        minHeight: '100vh',
        maxHeight: '100vh',
        background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #2a2a2a 100%)',
        color: 'white',
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
        overflow: 'hidden'
    };
    const cardStyle = {
        background: 'linear-gradient(135deg, rgba(8, 8, 12, 0.9) 0%, rgba(25, 25, 35, 0.9) 100%)',
        border: '2px solid rgba(80, 255, 214, 0.3)',
        borderRadius: '20px',
        padding: responsiveStyles.cardPadding,
        backdropFilter: 'blur(12px)',
        boxShadow: '0 25px 50px -12px rgba(80, 255, 214, 0.2)',
        textAlign: 'center',
        transition: 'all 0.3s ease'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: containerStyle,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                padding: '100px 20px 40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: cardStyle,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '64px',
                            height: '64px',
                            backgroundImage: selectedGame === 'tetris' ? 'url(/blocks.png)' : 'url(/pacman.png)',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            marginBottom: '20px',
                            margin: '0 auto 20px auto'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/ui/GameReadyScreen.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            marginBottom: '20px',
                            color: '#10b981'
                        },
                        children: [
                            "✅ Ready to Play ",
                            selectedGame === 'tetris' ? 'Tetris' : 'Pacman',
                            "!"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/GameReadyScreen.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            marginBottom: '30px',
                            color: '#B9C1C1',
                            fontSize: '18px'
                        },
                        children: [
                            "Press ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                style: {
                                    background: 'rgba(255, 61, 20, 0.2)',
                                    padding: '8px 12px',
                                    borderRadius: '6px',
                                    border: '1px solid rgba(255, 61, 20, 0.3)',
                                    color: '#FF3D14',
                                    fontFamily: 'Monaco, monospace'
                                },
                                children: "SPACEBAR"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/GameReadyScreen.tsx",
                                lineNumber: 53,
                                columnNumber: 19
                            }, this),
                            " to start"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/GameReadyScreen.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '14px',
                            color: '#B9C1C1'
                        },
                        children: [
                            selectedGame === 'tetris' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "🎯 Clear lines to score points"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/GameReadyScreen.tsx",
                                        lineNumber: 65,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "⚡ Speed increases every 4 lines"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/GameReadyScreen.tsx",
                                        lineNumber: 66,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "🍒 Eat all dots to advance levels"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/GameReadyScreen.tsx",
                                        lineNumber: 70,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "👻 Avoid ghosts or eat power pellets"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/GameReadyScreen.tsx",
                                        lineNumber: 71,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "🎮 Use arrow keys or WASD to move"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/GameReadyScreen.tsx",
                                        lineNumber: 72,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true),
                            address && !isOfflineMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "🏆 Publish scores to blockchain leaderboard!"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/GameReadyScreen.tsx",
                                lineNumber: 76,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/GameReadyScreen.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/GameReadyScreen.tsx",
                lineNumber: 38,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ui/GameReadyScreen.tsx",
            lineNumber: 37,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/GameReadyScreen.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
}),
"[project]/hooks/useLeaderboard.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "useLeaderboard": ()=>useLeaderboard
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useLeaderboard(mounted, address, isConnected, isOfflineMode) {
    const [leaderboard, setLeaderboard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoadingLeaderboard, setIsLoadingLeaderboard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [personalBests, setPersonalBests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!mounted) return;
        const loadLeaderboard = async ()=>{
            try {
                setIsLoadingLeaderboard(true);
                const response = await fetch('/api/leaderboard');
                const data = await response.json();
                if (data.success) {
                    // Combine tetris and pacman arrays to ensure all scores are included
                    const allScores = [
                        ...data.tetris || [],
                        ...data.pacman || [],
                        ...data.combined || []
                    ];
                    setLeaderboard(allScores);
                    // Load personal bests if wallet connected
                    if (address && isConnected && !isOfflineMode) {
                        const tetrisScores = (data.tetris || []).filter((entry)=>entry.walletAddress?.toLowerCase() === address.toLowerCase());
                        const pacmanScores = (data.pacman || []).filter((entry)=>entry.walletAddress?.toLowerCase() === address.toLowerCase());
                        setPersonalBests({
                            tetris: tetrisScores.length > 0 ? tetrisScores[0] : undefined,
                            pacman: pacmanScores.length > 0 ? pacmanScores[0] : undefined
                        });
                    } else {
                        setPersonalBests({});
                    }
                } else {
                    setLeaderboard([]);
                    setPersonalBests({});
                }
            } catch (e) {
                console.error(e);
                setLeaderboard([]);
                setPersonalBests({});
            } finally{
                setIsLoadingLeaderboard(false);
            }
        };
        loadLeaderboard();
    }, [
        mounted,
        address,
        isConnected,
        isOfflineMode
    ]);
    const refreshLeaderboard = async ()=>{
        try {
            setIsLoadingLeaderboard(true);
            const response = await fetch('/api/leaderboard');
            const data = await response.json();
            if (data.success) {
                // Combine all score arrays
                const allScores = [
                    ...data.tetris || [],
                    ...data.pacman || [],
                    ...data.combined || []
                ];
                setLeaderboard(allScores);
                // Update personal bests
                if (address && isConnected && !isOfflineMode) {
                    const tetrisScores = (data.tetris || []).filter((entry)=>entry.walletAddress?.toLowerCase() === address.toLowerCase());
                    const pacmanScores = (data.pacman || []).filter((entry)=>entry.walletAddress?.toLowerCase() === address.toLowerCase());
                    setPersonalBests({
                        tetris: tetrisScores.length > 0 ? tetrisScores[0] : undefined,
                        pacman: pacmanScores.length > 0 ? pacmanScores[0] : undefined
                    });
                }
            }
        } catch (e) {
            console.error(e);
        } finally{
            setIsLoadingLeaderboard(false);
        }
    };
    return {
        leaderboard,
        isLoadingLeaderboard,
        personalBests,
        refreshLeaderboard
    };
}
}),
"[project]/hooks/usePersistentState.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "usePersistentState": ()=>usePersistentState
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function usePersistentState(key, defaultValue, mounted) {
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultValue);
    // Load from localStorage on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!mounted) return;
        try {
            const stored = localStorage.getItem(key);
            if (stored !== null && stored !== 'null' && stored !== 'undefined') {
                // Handle different types appropriately
                if (typeof defaultValue === 'boolean') {
                    setValue(stored === 'true');
                } else if (typeof defaultValue === 'string') {
                    setValue(stored);
                } else {
                    setValue(stored);
                }
            }
        } catch (e) {
            console.error('Error loading from localStorage:', e);
        }
    }, [
        mounted,
        key,
        defaultValue
    ]);
    const setPersistentValue = (newValue)=>{
        setValue(newValue);
        if (!mounted) return;
        try {
            if (newValue === null || newValue === undefined) {
                localStorage.removeItem(key);
            } else {
                localStorage.setItem(key, String(newValue));
            }
        } catch (e) {
            console.error('Error saving to localStorage:', e);
        }
    };
    return [
        value,
        setPersistentValue
    ];
}
}),
"[project]/lib/walletUtils.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "authenticateUser": ()=>authenticateUser,
    "handlePayment": ()=>handlePayment
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/node_modules/ethers/lib.esm/ethers.js [app-ssr] (ecmascript) <export * as ethers>");
;
const handlePayment = async (gameType)=>{
    const ethereum = window.ethereum;
    if (!ethereum) throw new Error('No wallet found. Please install MetaMask, OKX, or another Web3 wallet.');
    // Ensure environment variables are available
    const walletAddress = ("TURBOPACK compile-time value", "0x677372cB4B105CDe5d8E6a6d7e8Abc51968e81Ff");
    const gameFee = ("TURBOPACK compile-time value", "0.01");
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    console.log('Payment details:', {
        walletAddress,
        gameFee
    }); // Debug log
    const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].BrowserProvider(ethereum);
    await provider.send('eth_requestAccounts', []);
    const signer = await provider.getSigner();
    // Convert fee to wei with proper validation
    const feeInWei = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].parseEther(gameFee.toString());
    const tx = await signer.sendTransaction({
        to: walletAddress,
        value: feeInWei
    });
    await tx.wait();
};
const authenticateUser = async (signMessageAsync)=>{
    const message = `Authenticate @375 Arcade at ${Date.now()}`;
    await signMessageAsync({
        message
    });
};
}),
"[project]/app/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>Page
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$dist$2f$esm$2f$exports$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@web3modal/wagmi/dist/esm/exports/react/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$scaffold$2d$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@web3modal/scaffold-react/dist/esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useDisconnect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/wagmi/dist/esm/hooks/useDisconnect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useSignMessage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/wagmi/dist/esm/hooks/useSignMessage.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CanvasTetris$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CanvasTetris.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CanvasPacman$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CanvasPacman.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$NavigationHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/NavigationHeader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/Footer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LeaderboardPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/LeaderboardPanel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$GameCarousel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/GameCarousel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$AuthenticationModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/modals/AuthenticationModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$NetworkSwitchModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/modals/NetworkSwitchModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$MobileWarningModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/modals/MobileWarningModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$GameReadyScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/GameReadyScreen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useLeaderboard$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useLeaderboard.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePersistentState$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/usePersistentState.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$walletUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/walletUtils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/index.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function Page() {
    const { open } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$scaffold$2d$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWeb3Modal"])();
    const { address, isConnected, chainId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAccount"])();
    const { disconnect } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useDisconnect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDisconnect"])();
    const { signMessageAsync } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useSignMessage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSignMessage"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [authed, setAuthed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePersistentState$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePersistentState"])(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].IS_AUTHENTICATED, 'false', mounted);
    const [isPaid, setIsPaid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePersistentState$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePersistentState"])(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].IS_PAID, 'false', mounted);
    const [selectedGame, setSelectedGame] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePersistentState$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePersistentState"])(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].SELECTED_GAME, null, mounted);
    const [gameStarted, setGameStarted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [gameOver, setGameOver] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isProcessingPayment, setIsProcessingPayment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isOfflineMode, setIsOfflineMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { leaderboard, isLoadingLeaderboard, personalBests, refreshLeaderboard } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useLeaderboard$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLeaderboard"])(mounted, address, isConnected, isOfflineMode);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!mounted || !address || !isConnected) return;
        try {
            const savedAuth = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].IS_AUTHENTICATED) === 'true';
            const savedPaid = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].IS_PAID) === 'true';
            const savedGame = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].SELECTED_GAME);
            if (savedAuth) {
                setAuthed('true');
                setIsPaid(savedPaid ? 'true' : 'false');
                if (savedGame) setSelectedGame(savedGame);
            }
        } catch (e) {
            console.error(e);
        }
    }, [
        mounted,
        address,
        isConnected,
        setAuthed,
        setIsPaid,
        setSelectedGame
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!mounted) return;
        try {
            if (address) localStorage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].WALLET_ADDRESS, address);
        } catch (e) {
            console.error(e);
        }
    }, [
        mounted,
        address
    ]);
    const clearPersistedState = ()=>{
        if (!mounted) return;
        try {
            Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STORAGE_KEYS"]).forEach((key)=>localStorage.removeItem(key));
        } catch (e) {
            console.error(e);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!mounted) return;
        if (!isConnected) {
            setAuthed('false');
            setIsPaid('false');
            setSelectedGame(null);
            setGameStarted(false);
            setGameOver(false);
            setIsOfflineMode(false);
            clearPersistedState();
        } else if (isConnected && address) {
            try {
                const savedAuth = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].IS_AUTHENTICATED) === 'true';
                const savedPaid = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].IS_PAID) === 'true';
                const savedGame = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].SELECTED_GAME);
                if (savedAuth) {
                    setAuthed('true');
                    setIsPaid(savedPaid ? 'true' : 'false');
                    if (savedGame) setSelectedGame(savedGame);
                }
            } catch (e) {
                console.error(e);
            }
        }
    }, [
        mounted,
        isConnected,
        address,
        setAuthed,
        setIsPaid,
        setSelectedGame
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!mounted) return;
        const canStartGame = (isPaid === 'true' || isOfflineMode) && selectedGame && !gameStarted && !gameOver;
        if (!canStartGame) return;
        const handler = (e)=>{
            if (e.code === 'Space') {
                setGameStarted(true);
                setGameOver(false);
            }
        };
        window.addEventListener('keydown', handler);
        return ()=>window.removeEventListener('keydown', handler);
    }, [
        mounted,
        isPaid,
        isOfflineMode,
        selectedGame,
        gameStarted,
        gameOver
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!mounted) return;
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Oswald:wght@400;700;800&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    }, [
        mounted
    ]);
    if (!mounted) return null;
    const handleGamePayment = async (gameType)=>{
        if (!gameType) return;
        setIsProcessingPayment(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$walletUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handlePayment"])(gameType);
            setSelectedGame(gameType);
            setIsPaid('true');
            setGameStarted(false);
            setGameOver(false);
        } catch (e) {
            if (e.code === 4001) alert('Payment cancelled by user');
            else if (e.message?.includes('insufficient funds')) alert('Insufficient funds. Please add more IRYS to your wallet.');
            else alert('Payment failed: ' + e.message);
        } finally{
            setIsProcessingPayment(false);
        }
    };
    const handleOfflineRestart = ()=>{
        setGameStarted(false);
        setGameOver(false);
    };
    const handlePublishScore = async ()=>{
        await refreshLeaderboard();
    };
    const handleHomeClick = ()=>{
        setGameStarted(false);
        setGameOver(false);
        setIsPaid('false');
        setSelectedGame(null);
        if (isOfflineMode) {
            setAuthed('false');
            setIsOfflineMode(false);
        }
        try {
            localStorage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].IS_PAID, 'false');
            localStorage.removeItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].SELECTED_GAME);
        } catch (e) {
            console.error(e);
        }
    };
    const handleDisconnectWallet = ()=>{
        disconnect();
        setAuthed('false');
        setIsPaid('false');
        setSelectedGame(null);
        setGameStarted(false);
        setGameOver(false);
        setIsOfflineMode(false);
        clearPersistedState();
    };
    const handleWalletConnection = async ()=>{
        try {
            await open();
        } catch (e) {
            console.error(e);
            alert('Failed to open wallet connection modal: ' + e.message);
        }
    };
    const handleAuthentication = async ()=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$walletUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authenticateUser"])(signMessageAsync);
            setAuthed('true');
            setIsPaid('false');
            setSelectedGame(null);
            setGameStarted(false);
            setGameOver(false);
        } catch (e) {
            if (e.message.includes('User rejected')) alert('Authentication cancelled by user');
            else alert('Authentication failed: ' + e.message);
        }
    };
    const handleOfflinePlay = (gameType)=>{
        console.log('Offline play selected:', gameType); // Debug log
        setIsOfflineMode(true);
        setAuthed('true');
        setSelectedGame(gameType);
        setIsPaid('true');
        setGameStarted(false);
        setGameOver(false);
        // Force localStorage update
        try {
            localStorage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].IS_AUTHENTICATED, 'true');
            localStorage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].IS_PAID, 'true');
            localStorage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].SELECTED_GAME, gameType || '');
        } catch (e) {
            console.error('localStorage error:', e);
        }
    };
    const containerStyle = {
        minHeight: '100vh',
        maxHeight: '100vh',
        background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #2a2a2a 100%)',
        color: 'white',
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
        overflow: 'hidden'
    };
    const mobileStyles = `
    @media (max-width: 480px) {
      .mobile-message {
        display: flex !important;
      }
      .desktop-content {
        display: none !important;
      }
    }
    @media (min-width: 481px) and (max-width: 768px) {
      .tablet-adjustments {
        transform: scale(0.5) !important;
      }
      .carousel-game-center, .carousel-game-side {
        min-width: 200px !important;
        max-width: 220px !important;
        height: 180px !important;
      }
      .arcade-title-fixed {
        max-width: 200px !important;
      }
    }
    @media (max-width: 1440px) {
      .arcade-container {
        padding: 120px 15px 120px !important;
      }
      .arcade-title-fixed {
        max-width: 400px !important;
        margin-bottom: 50px !important;
      }
    }
    @media (max-width: 768px) {
      .arcade-container {
        padding: 100px 10px 100px !important;
      }
      .arcade-title-fixed {
        max-width: 280px !important;
        margin-bottom: 30px !important;
      }
      .carousel-container {
        flex-direction: column !important;
        gap: 20px !important;
      }
      .carousel-game-center, .carousel-game-side {
        min-width: 250px !important;
        max-width: 280px !important;
        height: 350px !important;
      }
    }
  `;
    const isAuthenticated = authed === 'true';
    const hasPaid = isPaid === 'true';
    // Wrong network check
    if (chainId && chainId !== 1270 && !isOfflineMode) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: containerStyle,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$NavigationHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    onHomeClick: handleHomeClick,
                    onDisconnectWallet: handleDisconnectWallet,
                    address: address,
                    isConnected: isConnected,
                    authed: isAuthenticated,
                    isOfflineMode: isOfflineMode
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 280,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LeaderboardPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    isPaid: hasPaid,
                    isOfflineMode: isOfflineMode,
                    selectedGame: selectedGame,
                    leaderboard: leaderboard,
                    isLoadingLeaderboard: isLoadingLeaderboard,
                    personalBests: personalBests,
                    address: address
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 288,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$NetworkSwitchModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 297,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 298,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 279,
            columnNumber: 7
        }, this);
    }
    // No wallet connected
    if (!address && !isConnected && !isOfflineMode) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: containerStyle,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                    children: mobileStyles
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 307,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$NavigationHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    onHomeClick: handleHomeClick,
                    onDisconnectWallet: handleDisconnectWallet,
                    address: address,
                    isConnected: isConnected,
                    authed: isAuthenticated,
                    isOfflineMode: isOfflineMode
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 308,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LeaderboardPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    isPaid: hasPaid,
                    isOfflineMode: isOfflineMode,
                    selectedGame: selectedGame,
                    leaderboard: leaderboard,
                    isLoadingLeaderboard: isLoadingLeaderboard,
                    personalBests: personalBests,
                    address: address
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 316,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mobile-message",
                    style: {
                        display: 'none'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$MobileWarningModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            leaderboard: leaderboard
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 328,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 329,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 327,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "desktop-content arcade-container",
                    style: {
                        padding: '130px 20px 120px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100vh',
                        position: 'relative'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: '100%',
                                maxWidth: '1200px',
                                textAlign: 'center',
                                marginTop: '-20px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: '40px',
                                        position: 'relative',
                                        zIndex: 10
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/arcade-title.png",
                                        alt: "375 Arcade - Built on Irys",
                                        className: "arcade-title-fixed",
                                        style: {
                                            maxWidth: '400px',
                                            width: '100%',
                                            height: 'auto',
                                            filter: 'drop-shadow(0 8px 16px rgba(255, 61, 20, 0.3))'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 336,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 335,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$GameCarousel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    onGameSelect: handleGamePayment,
                                    onWalletConnection: handleWalletConnection,
                                    onOfflinePlay: handleOfflinePlay,
                                    isProcessingPayment: isProcessingPayment,
                                    showPaymentButtons: false
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 349,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 334,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 357,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 333,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 306,
            columnNumber: 7
        }, this);
    }
    // Authentication required
    if (!isAuthenticated && address && isConnected) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: containerStyle,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$NavigationHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    onHomeClick: handleHomeClick,
                    onDisconnectWallet: handleDisconnectWallet,
                    address: address,
                    isConnected: isConnected,
                    authed: isAuthenticated,
                    isOfflineMode: isOfflineMode
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 367,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LeaderboardPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    isPaid: hasPaid,
                    isOfflineMode: isOfflineMode,
                    selectedGame: selectedGame,
                    leaderboard: leaderboard,
                    isLoadingLeaderboard: isLoadingLeaderboard,
                    personalBests: personalBests,
                    address: address
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 375,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$AuthenticationModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    address: address,
                    onAuthenticate: handleAuthentication
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 384,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 388,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 366,
            columnNumber: 7
        }, this);
    }
    // Game selection (authenticated, not paid)
    if (address && isConnected && isAuthenticated && !hasPaid && !gameStarted && !gameOver) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: containerStyle,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$NavigationHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    onHomeClick: handleHomeClick,
                    onDisconnectWallet: handleDisconnectWallet,
                    address: address,
                    isConnected: isConnected,
                    authed: isAuthenticated,
                    isOfflineMode: isOfflineMode
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 397,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LeaderboardPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    isPaid: hasPaid,
                    isOfflineMode: isOfflineMode,
                    selectedGame: selectedGame,
                    leaderboard: leaderboard,
                    isLoadingLeaderboard: isLoadingLeaderboard,
                    personalBests: personalBests,
                    address: address
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 405,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        padding: '70px 20px 80px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100vh',
                        position: 'relative'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: '100%',
                                maxWidth: '1200px',
                                textAlign: 'center'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: '30px',
                                        position: 'relative',
                                        zIndex: 10
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/arcade-title.png",
                                        alt: "375 Arcade - Built on Irys",
                                        style: {
                                            maxWidth: '400px',
                                            width: '100%',
                                            height: 'auto',
                                            filter: 'drop-shadow(0 8px 16px rgba(255, 61, 20, 0.3))'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 417,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 416,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$GameCarousel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    onGameSelect: handleGamePayment,
                                    onWalletConnection: handleWalletConnection,
                                    onOfflinePlay: handleOfflinePlay,
                                    isProcessingPayment: isProcessingPayment,
                                    showPaymentButtons: true
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 429,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 415,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 437,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 414,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 396,
            columnNumber: 7
        }, this);
    }
    // Game ready screen
    if ((isOfflineMode || hasPaid) && selectedGame && !gameStarted && !gameOver) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: containerStyle,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'fixed',
                        top: '140px',
                        left: '20px',
                        zIndex: 1000
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/arcade-title.png",
                        alt: "375 Arcade - Built on Irys",
                        style: {
                            maxWidth: '500px',
                            width: '100%',
                            height: 'auto',
                            filter: 'drop-shadow(0 4px 8px rgba(255, 61, 20, 0.3))'
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 453,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 447,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$NavigationHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    onHomeClick: handleHomeClick,
                    onDisconnectWallet: handleDisconnectWallet,
                    address: address,
                    isConnected: isConnected,
                    authed: isAuthenticated,
                    isOfflineMode: isOfflineMode
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 465,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LeaderboardPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    isPaid: hasPaid,
                    isOfflineMode: isOfflineMode,
                    selectedGame: selectedGame,
                    leaderboard: leaderboard,
                    isLoadingLeaderboard: isLoadingLeaderboard,
                    personalBests: personalBests,
                    address: address
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 473,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$GameReadyScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    selectedGame: selectedGame,
                    address: address,
                    isOfflineMode: isOfflineMode
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 482,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 487,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 446,
            columnNumber: 7
        }, this);
    }
    // Game playing
    if (gameStarted || gameOver) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: containerStyle,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'fixed',
                        top: '140px',
                        left: '20px',
                        zIndex: 1000
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/arcade-title.png",
                        alt: "375 Arcade - Built on Irys",
                        style: {
                            maxWidth: '500px',
                            width: '100%',
                            height: 'auto',
                            filter: 'drop-shadow(0 4px 8px rgba(255, 61, 20, 0.3))'
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 502,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 496,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$NavigationHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    onHomeClick: handleHomeClick,
                    onDisconnectWallet: handleDisconnectWallet,
                    address: address,
                    isConnected: isConnected,
                    authed: isAuthenticated,
                    isOfflineMode: isOfflineMode
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 514,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LeaderboardPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    isPaid: hasPaid,
                    isOfflineMode: isOfflineMode,
                    selectedGame: selectedGame,
                    leaderboard: leaderboard,
                    isLoadingLeaderboard: isLoadingLeaderboard,
                    personalBests: personalBests,
                    address: address
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 522,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        padding: '80px 20px 20px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        minHeight: '100vh'
                    },
                    children: selectedGame === 'tetris' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CanvasTetris$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        start: gameStarted,
                        onGameOver: (score, lines)=>{
                            setGameOver(true);
                            setGameStarted(false);
                        },
                        onPlayAgain: isOfflineMode ? handleOfflineRestart : ()=>handleGamePayment('tetris'),
                        onPublishScore: handlePublishScore,
                        playerAddress: isOfflineMode ? undefined : address
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 539,
                        columnNumber: 13
                    }, this) : selectedGame === 'pacman' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CanvasPacman$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        start: gameStarted,
                        onGameOver: (score, level)=>{
                            setGameOver(true);
                            setGameStarted(false);
                        },
                        onPlayAgain: isOfflineMode ? handleOfflineRestart : ()=>handleGamePayment('pacman'),
                        onPublishScore: handlePublishScore,
                        playerAddress: isOfflineMode ? undefined : address
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 550,
                        columnNumber: 13
                    }, this) : null
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 531,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 562,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 495,
            columnNumber: 7
        }, this);
    }
    // Loading state
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: containerStyle,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$NavigationHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onHomeClick: handleHomeClick,
                onDisconnectWallet: handleDisconnectWallet,
                address: address,
                isConnected: isConnected,
                authed: isAuthenticated,
                isOfflineMode: isOfflineMode
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 570,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LeaderboardPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isPaid: hasPaid,
                isOfflineMode: isOfflineMode,
                selectedGame: selectedGame,
                leaderboard: leaderboard,
                isLoadingLeaderboard: isLoadingLeaderboard,
                personalBests: personalBests,
                address: address
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 578,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: '100px 20px 40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100vh'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        background: 'linear-gradient(135deg, rgba(8, 8, 12, 0.9) 0%, rgba(25, 25, 35, 0.9) 100%)',
                        border: '2px solid rgba(80, 255, 214, 0.3)',
                        borderRadius: '20px',
                        padding: '40px',
                        backdropFilter: 'blur(12px)',
                        boxShadow: '0 25px 50px -12px rgba(80, 255, 214, 0.2)',
                        textAlign: 'center',
                        transition: 'all 0.3s ease'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: '48px',
                                marginBottom: '20px'
                            },
                            children: "🔄"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 598,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                marginBottom: '20px'
                            },
                            children: "Loading..."
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 599,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: '#B9C1C1'
                            },
                            children: "Initializing 375 Arcade..."
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 600,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 588,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 587,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 603,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 569,
        columnNumber: 5
    }, this);
}
}),

};

//# sourceMappingURL=_5b7b5e1c._.js.map