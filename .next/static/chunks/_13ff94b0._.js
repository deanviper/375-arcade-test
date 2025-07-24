(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/components/CanvasTetris.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>CanvasTetris
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
function CanvasTetris(param) {
    let { onGameOver, start, onPlayAgain, onPublishScore, playerAddress } = param;
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ctxRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const gridRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(Array.from({
        length: ROWS
    }, {
        "CanvasTetris.useRef[gridRef]": ()=>Array(COLS).fill('')
    }["CanvasTetris.useRef[gridRef]"]));
    const [grid, setGrid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Array.from({
        length: ROWS
    }, {
        "CanvasTetris.useState": ()=>Array(COLS).fill('')
    }["CanvasTetris.useState"]));
    const currentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const nextPieceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const holdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const usedHoldRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [score, setScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [lines, setLines] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [level, setLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const scoreRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const linesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const levelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(1);
    const comboRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const gameOverRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [isGameOver, setIsGameOver] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPublishing, setIsPublishing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CanvasTetris.useEffect": ()=>{
            ctxRef.current = canvasRef.current.getContext('2d');
            draw();
        }
    }["CanvasTetris.useEffect"], []);
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
        ctx.fillText("Score: ".concat(scoreRef.current), centerX, 25);
        ctx.fillText("Lines: ".concat(linesRef.current), centerX, 45);
        ctx.fillText("Level: ".concat(levelRef.current), centerX, 65);
        if (comboRef.current > 0) {
            ctx.fillStyle = '#f39c12';
            ctx.fillText("Combo: ".concat(comboRef.current, "x"), centerX, 85);
            ctx.fillStyle = '#fff';
        }
        ctx.fillStyle = '#888';
        ctx.font = '10px sans-serif';
        ctx.fillText("Speed: ".concat(getDropSpeed(), "ms"), centerX, 105);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CanvasTetris.useEffect": ()=>{
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
                }, {
                    "CanvasTetris.useEffect": ()=>Array(COLS).fill('')
                }["CanvasTetris.useEffect"]);
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
            const handleKeyDown = {
                "CanvasTetris.useEffect.handleKeyDown": (e)=>{
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
                                shape: tmp.shape.map({
                                    "CanvasTetris.useEffect.handleKeyDown": (r)=>[
                                            ...r
                                        ]
                                }["CanvasTetris.useEffect.handleKeyDown"]),
                                color: tmp.color,
                                cw: tmp.cw
                            };
                        }
                        usedHoldRef.current = true;
                        needsRedraw = true;
                    }
                    if (needsRedraw) draw();
                }
            }["CanvasTetris.useEffect.handleKeyDown"];
            const handleKeyUp = {
                "CanvasTetris.useEffect.handleKeyUp": (e)=>{
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
                }
            }["CanvasTetris.useEffect.handleKeyUp"];
            window.addEventListener('keydown', handleKeyDown);
            window.addEventListener('keyup', handleKeyUp);
            if (start) timerRef.current = window.setTimeout(step, getDropSpeed());
            return ({
                "CanvasTetris.useEffect": ()=>{
                    window.removeEventListener('keydown', handleKeyDown);
                    window.removeEventListener('keyup', handleKeyUp);
                    clearTimeout(timerRef.current);
                    if (keyRepeatTimer) clearTimeout(keyRepeatTimer);
                }
            })["CanvasTetris.useEffect"];
        }
    }["CanvasTetris.useEffect"], [
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
        const tweetText = "I scored ".concat(s.toLocaleString(), " points on @375ai_ Arcade's ").concat(gameType, "! Powered by @irys_xyz blockchain. https://375-arcade.vercel.app/");
        const url = "https://twitter.com/intent/tweet?text=".concat(encodeURIComponent(tweetText));
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
                chainId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_IRYS_CHAIN_ID,
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
            const { ethers } = await __turbopack_context__.r("[project]/node_modules/ethers/lib.esm/index.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i);
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const message = "Publish Tetris Score: ".concat(scoreRef.current, " points, ").concat(linesRef.current, " lines at ").concat(Date.now());
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
                alert("🎉 Score published to blockchain!\n\nTransaction ID: ".concat(result.txHash));
            } else throw new Error(result.error || 'Upload failed');
        } catch (e) {
            var _e_message;
            if (e.code === 4001) alert('Transaction cancelled by user');
            else if ((_e_message = e.message) === null || _e_message === void 0 ? void 0 : _e_message.includes('User rejected')) alert('Transaction rejected by user');
            else alert("Failed to publish score: ".concat(e.message));
        } finally{
            setIsPublishing(false);
        }
    };
    const getResponsiveSize = ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const sw = window.innerWidth, sh = window.innerHeight;
        const maxW = Math.min(sw * 0.6, 800);
        const maxH = Math.min(sh * 0.7, 600);
        const sx = maxW / (COLS * BLOCK + 180);
        const sy = maxH / (ROWS * BLOCK);
        const scale = Math.min(sx, sy, 1.2);
        return {
            scale: Math.max(scale, 0.5)
        };
    };
    const { scale } = getResponsiveSize();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'relative',
            display: 'inline-block'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                width: COLS * BLOCK + 180,
                height: ROWS * BLOCK,
                style: {
                    background: '#000',
                    border: '2px solid #666',
                    transform: "scale(".concat(scale, ")"),
                    transformOrigin: 'top left',
                    imageRendering: 'pixelated'
                }
            }, void 0, false, {
                fileName: "[project]/components/CanvasTetris.tsx",
                lineNumber: 496,
                columnNumber: 7
            }, this),
            isGameOver && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: '18px',
                                marginBottom: '20px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        "Final Score: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        "Lines Cleared: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        "Level Reached: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: '10px',
                                justifyContent: 'center',
                                flexWrap: 'wrap'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                playerAddress && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                        isPublishing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_s(CanvasTetris, "Vz/KaKSiaCgQfyrBjoeaDMr55pI=");
_c = CanvasTetris;
var _c;
__turbopack_context__.k.register(_c, "CanvasTetris");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/CanvasPacman.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>CanvasPacman
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
function CanvasPacman(param) {
    let { onGameOver, start, onPlayAgain, onPublishScore, playerAddress } = param;
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const gameLoopRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const mazeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(MAZE.map({
        "CanvasPacman.useRef[mazeRef]": (row)=>[
                ...row
            ]
    }["CanvasPacman.useRef[mazeRef]"]));
    const [isGameOver, setIsGameOver] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPublishing, setIsPublishing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pacmanRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 9,
        y: 15,
        dir: 'RIGHT',
        nextDir: 'RIGHT',
        moving: true,
        respawning: false,
        respawnTimer: 0,
        animFrame: 0
    });
    const ghostsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([
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
    const gameStateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
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
    const [score, setScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [level, setLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [lives, setLives] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(3);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CanvasPacman.useEffect": ()=>{
            const dotCount = MAZE.flat().filter({
                "CanvasPacman.useEffect": (cell)=>cell === 1 || cell === 2
            }["CanvasPacman.useEffect"]).length;
            gameStateRef.current.dotsRemaining = dotCount;
        }
    }["CanvasPacman.useEffect"], []);
    const canMove = (x, y)=>{
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
                if (pacman.x < 0) pacman.x = COLS - 1;
                if (pacman.x >= COLS) pacman.x = 0;
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
                        pacman.respawnTimer = 90; // 1.5 seconds at 60fps
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CanvasPacman.useEffect": ()=>{
            const handleKeyDown = {
                "CanvasPacman.useEffect.handleKeyDown": (e)=>{
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
                }
            }["CanvasPacman.useEffect.handleKeyDown"];
            window.addEventListener('keydown', handleKeyDown);
            return ({
                "CanvasPacman.useEffect": ()=>window.removeEventListener('keydown', handleKeyDown)
            })["CanvasPacman.useEffect"];
        }
    }["CanvasPacman.useEffect"], [
        isGameOver
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CanvasPacman.useEffect": ()=>{
            if (start && !gameStateRef.current.gameOver) {
                gameStateRef.current = {
                    score: 0,
                    level: 1,
                    lives: 3,
                    powerMode: false,
                    powerTimer: 0,
                    gameOver: false,
                    dotsRemaining: MAZE.flat().filter({
                        "CanvasPacman.useEffect": (cell)=>cell === 1 || cell === 2
                    }["CanvasPacman.useEffect"]).length,
                    paused: false,
                    frameCount: 0
                };
                setScore(0);
                setLevel(1);
                setLives(3);
                setIsGameOver(false);
                mazeRef.current = MAZE.map({
                    "CanvasPacman.useEffect": (row)=>[
                            ...row
                        ]
                }["CanvasPacman.useEffect"]);
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
            return ({
                "CanvasPacman.useEffect": ()=>{
                    if (gameLoopRef.current) clearTimeout(gameLoopRef.current);
                }
            })["CanvasPacman.useEffect"];
        }
    }["CanvasPacman.useEffect"], [
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
        const tweetText = "I scored ".concat(sc.toLocaleString(), " points on @375ai_ Arcade's ").concat(gameType, "! Powered by @irys_xyz blockchain. https://375-arcade.vercel.app/");
        const tweetUrl = "https://twitter.com/intent/tweet?text=".concat(encodeURIComponent(tweetText));
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
                chainId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_IRYS_CHAIN_ID,
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
            const { ethers } = await __turbopack_context__.r("[project]/node_modules/ethers/lib.esm/index.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i);
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const message = "Publish Pacman Score: ".concat(gameStateRef.current.score, " points, level ").concat(gameStateRef.current.level, " at ").concat(Date.now());
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
                alert("🎉 Score published to blockchain!\n\nTransaction ID: ".concat(result.txHash, "\n\nYour Pacman score is now permanently stored on the Irys blockchain!"));
            } else throw new Error(result.error || 'Upload failed');
        } catch (e) {
            var _e_message;
            if (e.code === 4001) alert('Transaction cancelled by user');
            else if ((_e_message = e.message) === null || _e_message === void 0 ? void 0 : _e_message.includes('User rejected')) alert('Transaction rejected by user');
            else alert("Failed to publish score: ".concat(e.message));
        } finally{
            setIsPublishing(false);
        }
    };
    const getResponsiveSize = ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const maxGameWidth = Math.min(screenWidth * 0.8, 600);
        const maxGameHeight = Math.min(screenHeight * 0.6, 500);
        const scaleX = maxGameWidth / CANVAS_WIDTH;
        const scaleY = maxGameHeight / CANVAS_HEIGHT;
        const scale = Math.min(scaleX, scaleY, 1.5);
        return {
            scale: Math.max(scale, 0.6),
            containerWidth: CANVAS_WIDTH * scale
        };
    };
    const { scale, containerWidth } = getResponsiveSize();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'relative',
            display: 'inline-block'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                width: CANVAS_WIDTH,
                height: CANVAS_HEIGHT,
                style: {
                    background: '#000',
                    border: '2px solid #FFD700',
                    borderRadius: '8px',
                    transform: "scale(".concat(scale, ")"),
                    transformOrigin: 'top left',
                    imageRendering: 'pixelated'
                }
            }, void 0, false, {
                fileName: "[project]/components/CanvasPacman.tsx",
                lineNumber: 587,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: "".concat(-50 * scale, "px"),
                    left: '0',
                    width: "".concat(containerWidth, "px"),
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: "0 ".concat(8 * scale, "px"),
                    color: '#FFFF00',
                    fontFamily: 'monospace',
                    fontSize: "".concat(16 * scale, "px"),
                    fontWeight: 'bold',
                    pointerEvents: 'none',
                    transform: "scale(".concat(scale, ")"),
                    transformOrigin: 'top left'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            "Score: ",
                            score
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CanvasPacman.tsx",
                        lineNumber: 619,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            "Level: ",
                            level
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CanvasPacman.tsx",
                        lineNumber: 620,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        lineNumber: 621,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CanvasPacman.tsx",
                lineNumber: 602,
                columnNumber: 7
            }, this),
            isGameOver && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                            lineNumber: 651,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                margin: '0 0 20px 0',
                                color: '#FFD700'
                            },
                            children: "Game Over!"
                        }, void 0, false, {
                            fileName: "[project]/components/CanvasPacman.tsx",
                            lineNumber: 682,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: '18px',
                                marginBottom: '20px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        "Final Score: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: '#FFFF00'
                                            },
                                            children: gameStateRef.current.score
                                        }, void 0, false, {
                                            fileName: "[project]/components/CanvasPacman.tsx",
                                            lineNumber: 684,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CanvasPacman.tsx",
                                    lineNumber: 684,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        "Level Reached: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: '#FF69B4'
                                            },
                                            children: gameStateRef.current.level
                                        }, void 0, false, {
                                            fileName: "[project]/components/CanvasPacman.tsx",
                                            lineNumber: 685,
                                            columnNumber: 35
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CanvasPacman.tsx",
                                    lineNumber: 685,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CanvasPacman.tsx",
                            lineNumber: 683,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: '10px',
                                justifyContent: 'center',
                                flexWrap: 'wrap'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                    lineNumber: 689,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                    lineNumber: 704,
                                    columnNumber: 15
                                }, this),
                                playerAddress && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                    lineNumber: 720,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CanvasPacman.tsx",
                            lineNumber: 688,
                            columnNumber: 13
                        }, this),
                        isPublishing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginTop: '15px',
                                fontSize: '14px',
                                color: '#95a5a6'
                            },
                            children: "Sign the transaction in your wallet to publish your score to the blockchain"
                        }, void 0, false, {
                            fileName: "[project]/components/CanvasPacman.tsx",
                            lineNumber: 740,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CanvasPacman.tsx",
                    lineNumber: 642,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/CanvasPacman.tsx",
                lineNumber: 627,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/CanvasPacman.tsx",
        lineNumber: 586,
        columnNumber: 5
    }, this);
}
_s(CanvasPacman, "/i9XFO73v9K9nuqllubc2ukKBos=");
_c = CanvasPacman;
var _c;
__turbopack_context__.k.register(_c, "CanvasPacman");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/layout/NavigationHeader.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {

var { k: __turbopack_refresh__, m: module, e: exports } = __turbopack_context__;
{
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/layout/Footer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {

var { k: __turbopack_refresh__, m: module, e: exports } = __turbopack_context__;
{
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/LeaderboardPanel.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {

var { k: __turbopack_refresh__, m: module, e: exports } = __turbopack_context__;
{
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/GameCarousel.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {

var { k: __turbopack_refresh__, m: module, e: exports } = __turbopack_context__;
{
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/modals/AuthenticationModal.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {

var { k: __turbopack_refresh__, m: module, e: exports } = __turbopack_context__;
{
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/modals/NetworkSwitchModal.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {

var { k: __turbopack_refresh__, m: module, e: exports } = __turbopack_context__;
{
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/modals/MobileWarningModal.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {

var { k: __turbopack_refresh__, m: module, e: exports } = __turbopack_context__;
{
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/GameReadyScreen.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {

var { k: __turbopack_refresh__, m: module, e: exports } = __turbopack_context__;
{
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/hooks/useLeaderboard.ts [app-client] (ecmascript)": ((__turbopack_context__) => {

var { k: __turbopack_refresh__, m: module, e: exports } = __turbopack_context__;
{
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/hooks/usePersistentState.ts [app-client] (ecmascript)": ((__turbopack_context__) => {

var { k: __turbopack_refresh__, m: module, e: exports } = __turbopack_context__;
{
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/lib/walletUtils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {

var { k: __turbopack_refresh__, m: module, e: exports } = __turbopack_context__;
{
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/constants/index.ts [app-client] (ecmascript)": ((__turbopack_context__) => {

var { k: __turbopack_refresh__, m: module, e: exports } = __turbopack_context__;
{
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>Page
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$dist$2f$esm$2f$exports$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@web3modal/wagmi/dist/esm/exports/react/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$scaffold$2d$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@web3modal/scaffold-react/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useDisconnect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/wagmi/dist/esm/hooks/useDisconnect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useSignMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/wagmi/dist/esm/hooks/useSignMessage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CanvasTetris$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CanvasTetris.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CanvasPacman$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CanvasPacman.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$NavigationHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/NavigationHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LeaderboardPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/LeaderboardPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$GameCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/GameCarousel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$AuthenticationModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/modals/AuthenticationModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$NetworkSwitchModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/modals/NetworkSwitchModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$MobileWarningModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/modals/MobileWarningModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$GameReadyScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/GameReadyScreen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useLeaderboard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useLeaderboard.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePersistentState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/usePersistentState.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$walletUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/walletUtils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/index.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
function Page() {
    _s();
    const { open } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$scaffold$2d$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWeb3Modal"])();
    const { address, isConnected, chainId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"])();
    const { disconnect } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useDisconnect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDisconnect"])();
    const { signMessageAsync } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useSignMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSignMessage"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [authed, setAuthed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePersistentState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePersistentState"])(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].IS_AUTHENTICATED, 'false', mounted);
    const [isPaid, setIsPaid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePersistentState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePersistentState"])(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].IS_PAID, 'false', mounted);
    const [selectedGame, setSelectedGame] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePersistentState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePersistentState"])(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].SELECTED_GAME, null, mounted);
    const [gameStarted, setGameStarted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [gameOver, setGameOver] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isProcessingPayment, setIsProcessingPayment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isOfflineMode, setIsOfflineMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { leaderboard, isLoadingLeaderboard, personalBests, refreshLeaderboard } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useLeaderboard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLeaderboard"])(mounted, address, isConnected, isOfflineMode);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            setMounted(true);
        }
    }["Page.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            if (!mounted || !address || !isConnected) return;
            try {
                const savedAuth = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].IS_AUTHENTICATED) === 'true';
                const savedPaid = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].IS_PAID) === 'true';
                const savedGame = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].SELECTED_GAME);
                if (savedAuth) {
                    setAuthed('true');
                    setIsPaid(savedPaid ? 'true' : 'false');
                    if (savedGame) setSelectedGame(savedGame);
                }
            } catch (e) {
                console.error(e);
            }
        }
    }["Page.useEffect"], [
        mounted,
        address,
        isConnected,
        setAuthed,
        setIsPaid,
        setSelectedGame
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            if (!mounted) return;
            try {
                if (address) localStorage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].WALLET_ADDRESS, address);
            } catch (e) {
                console.error(e);
            }
        }
    }["Page.useEffect"], [
        mounted,
        address
    ]);
    const clearPersistedState = ()=>{
        if (!mounted) return;
        try {
            Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"]).forEach((key)=>localStorage.removeItem(key));
        } catch (e) {
            console.error(e);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
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
                    const savedAuth = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].IS_AUTHENTICATED) === 'true';
                    const savedPaid = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].IS_PAID) === 'true';
                    const savedGame = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].SELECTED_GAME);
                    if (savedAuth) {
                        setAuthed('true');
                        setIsPaid(savedPaid ? 'true' : 'false');
                        if (savedGame) setSelectedGame(savedGame);
                    }
                } catch (e) {
                    console.error(e);
                }
            }
        }
    }["Page.useEffect"], [
        mounted,
        isConnected,
        address,
        setAuthed,
        setIsPaid,
        setSelectedGame
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            if (!mounted) return;
            const canStartGame = (isPaid === 'true' || isOfflineMode) && selectedGame && !gameStarted && !gameOver;
            if (!canStartGame) return;
            const handler = {
                "Page.useEffect.handler": (e)=>{
                    if (e.code === 'Space') {
                        setGameStarted(true);
                        setGameOver(false);
                    }
                }
            }["Page.useEffect.handler"];
            window.addEventListener('keydown', handler);
            return ({
                "Page.useEffect": ()=>window.removeEventListener('keydown', handler)
            })["Page.useEffect"];
        }
    }["Page.useEffect"], [
        mounted,
        isPaid,
        isOfflineMode,
        selectedGame,
        gameStarted,
        gameOver
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            if (!mounted) return;
            const link = document.createElement('link');
            link.href = 'https://fonts.googleapis.com/css2?family=Oswald:wght@400;700;800&display=swap';
            link.rel = 'stylesheet';
            document.head.appendChild(link);
        }
    }["Page.useEffect"], [
        mounted
    ]);
    if (!mounted) return null;
    const handleGamePayment = async (gameType)=>{
        if (!gameType) return;
        setIsProcessingPayment(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$walletUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handlePayment"])(gameType);
            setSelectedGame(gameType);
            setIsPaid('true');
            setGameStarted(false);
            setGameOver(false);
        } catch (e) {
            var _e_message;
            if (e.code === 4001) alert('Payment cancelled by user');
            else if ((_e_message = e.message) === null || _e_message === void 0 ? void 0 : _e_message.includes('insufficient funds')) alert('Insufficient funds. Please add more IRYS to your wallet.');
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
            localStorage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].IS_PAID, 'false');
            localStorage.removeItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].SELECTED_GAME);
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
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$walletUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authenticateUser"])(signMessageAsync);
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
        setIsOfflineMode(true);
        setAuthed('true');
        setSelectedGame(gameType);
        setIsPaid('true');
        setGameStarted(false);
        setGameOver(false);
    };
    const containerStyle = {
        minHeight: '100vh',
        maxHeight: '100vh',
        background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #2a2a2a 100%)',
        color: 'white',
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
        overflow: 'hidden'
    };
    const mobileStyles = "\n    @media (max-width: 480px) {\n      .mobile-message {\n        display: flex !important;\n      }\n      .desktop-content {\n        display: none !important;\n      }\n    }\n    @media (min-width: 481px) and (max-width: 768px) {\n      .tablet-adjustments {\n        transform: scale(0.5) !important;\n      }\n      .carousel-game-center, .carousel-game-side {\n        min-width: 200px !important;\n        max-width: 220px !important;\n        height: 180px !important;\n      }\n      .arcade-title-fixed {\n        max-width: 200px !important;\n      }\n    }\n    @media (max-width: 1440px) {\n      .arcade-container {\n        padding: 120px 15px 120px !important;\n      }\n      .arcade-title-fixed {\n        max-width: 400px !important;\n        margin-bottom: 50px !important;\n      }\n    }\n    @media (max-width: 768px) {\n      .arcade-container {\n        padding: 100px 10px 100px !important;\n      }\n      .arcade-title-fixed {\n        max-width: 280px !important;\n        margin-bottom: 30px !important;\n      }\n      .carousel-container {\n        flex-direction: column !important;\n        gap: 20px !important;\n      }\n      .carousel-game-center, .carousel-game-side {\n        min-width: 250px !important;\n        max-width: 280px !important;\n        height: 350px !important;\n      }\n    }\n  ";
    const isAuthenticated = authed === 'true';
    const hasPaid = isPaid === 'true';
    // Wrong network check
    if (chainId && chainId !== 1270 && !isOfflineMode) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: containerStyle,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$NavigationHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onHomeClick: handleHomeClick,
                    onDisconnectWallet: handleDisconnectWallet,
                    address: address,
                    isConnected: isConnected,
                    authed: isAuthenticated,
                    isOfflineMode: isOfflineMode
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 270,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LeaderboardPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    isPaid: hasPaid,
                    isOfflineMode: isOfflineMode,
                    selectedGame: selectedGame,
                    leaderboard: leaderboard,
                    isLoadingLeaderboard: isLoadingLeaderboard,
                    personalBests: personalBests,
                    address: address
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 278,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$NetworkSwitchModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 287,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 288,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 269,
            columnNumber: 7
        }, this);
    }
    // No wallet connected
    if (!address && !isConnected && !isOfflineMode) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: containerStyle,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                    children: mobileStyles
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 297,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$NavigationHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onHomeClick: handleHomeClick,
                    onDisconnectWallet: handleDisconnectWallet,
                    address: address,
                    isConnected: isConnected,
                    authed: isAuthenticated,
                    isOfflineMode: isOfflineMode
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 298,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LeaderboardPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    isPaid: hasPaid,
                    isOfflineMode: isOfflineMode,
                    selectedGame: selectedGame,
                    leaderboard: leaderboard,
                    isLoadingLeaderboard: isLoadingLeaderboard,
                    personalBests: personalBests,
                    address: address
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 306,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mobile-message",
                    style: {
                        display: 'none'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$MobileWarningModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            leaderboard: leaderboard
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 318,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 319,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 317,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: '100%',
                                maxWidth: '1200px',
                                textAlign: 'center',
                                marginTop: '-20px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: '40px',
                                        position: 'relative',
                                        zIndex: 10
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                                        lineNumber: 326,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 325,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$GameCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    onGameSelect: handleGamePayment,
                                    onWalletConnection: handleWalletConnection,
                                    onOfflinePlay: handleOfflinePlay,
                                    isProcessingPayment: isProcessingPayment,
                                    showPaymentButtons: false
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 339,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 324,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 347,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 323,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 296,
            columnNumber: 7
        }, this);
    }
    // Authentication required
    if (!isAuthenticated && address && isConnected) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: containerStyle,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$NavigationHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onHomeClick: handleHomeClick,
                    onDisconnectWallet: handleDisconnectWallet,
                    address: address,
                    isConnected: isConnected,
                    authed: isAuthenticated,
                    isOfflineMode: isOfflineMode
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 357,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LeaderboardPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    isPaid: hasPaid,
                    isOfflineMode: isOfflineMode,
                    selectedGame: selectedGame,
                    leaderboard: leaderboard,
                    isLoadingLeaderboard: isLoadingLeaderboard,
                    personalBests: personalBests,
                    address: address
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 365,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$AuthenticationModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    address: address,
                    onAuthenticate: handleAuthentication
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 374,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 378,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 356,
            columnNumber: 7
        }, this);
    }
    // Game selection (authenticated, not paid)
    if (address && isConnected && isAuthenticated && !hasPaid && !gameStarted && !gameOver) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: containerStyle,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$NavigationHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onHomeClick: handleHomeClick,
                    onDisconnectWallet: handleDisconnectWallet,
                    address: address,
                    isConnected: isConnected,
                    authed: isAuthenticated,
                    isOfflineMode: isOfflineMode
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 387,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LeaderboardPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    isPaid: hasPaid,
                    isOfflineMode: isOfflineMode,
                    selectedGame: selectedGame,
                    leaderboard: leaderboard,
                    isLoadingLeaderboard: isLoadingLeaderboard,
                    personalBests: personalBests,
                    address: address
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 395,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        padding: '70px 20px 80px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100vh',
                        position: 'relative'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: '100%',
                                maxWidth: '1200px',
                                textAlign: 'center'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: '30px',
                                        position: 'relative',
                                        zIndex: 10
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                                        lineNumber: 407,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 406,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$GameCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    onGameSelect: handleGamePayment,
                                    onWalletConnection: handleWalletConnection,
                                    onOfflinePlay: handleOfflinePlay,
                                    isProcessingPayment: isProcessingPayment,
                                    showPaymentButtons: true
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 419,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 405,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 427,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 404,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 386,
            columnNumber: 7
        }, this);
    }
    // Game ready screen
    if ((isOfflineMode || hasPaid) && selectedGame && !gameStarted && !gameOver) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: containerStyle,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'fixed',
                        top: '140px',
                        left: '20px',
                        zIndex: 1000
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                        lineNumber: 443,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 437,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$NavigationHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onHomeClick: handleHomeClick,
                    onDisconnectWallet: handleDisconnectWallet,
                    address: address,
                    isConnected: isConnected,
                    authed: isAuthenticated,
                    isOfflineMode: isOfflineMode
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 455,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LeaderboardPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    isPaid: hasPaid,
                    isOfflineMode: isOfflineMode,
                    selectedGame: selectedGame,
                    leaderboard: leaderboard,
                    isLoadingLeaderboard: isLoadingLeaderboard,
                    personalBests: personalBests,
                    address: address
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 463,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$GameReadyScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    selectedGame: selectedGame,
                    address: address,
                    isOfflineMode: isOfflineMode
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 472,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 477,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 436,
            columnNumber: 7
        }, this);
    }
    // Game playing
    if (gameStarted || gameOver) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: containerStyle,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'fixed',
                        top: '140px',
                        left: '20px',
                        zIndex: 1000
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                        lineNumber: 492,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 486,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$NavigationHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onHomeClick: handleHomeClick,
                    onDisconnectWallet: handleDisconnectWallet,
                    address: address,
                    isConnected: isConnected,
                    authed: isAuthenticated,
                    isOfflineMode: isOfflineMode
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 504,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LeaderboardPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    isPaid: hasPaid,
                    isOfflineMode: isOfflineMode,
                    selectedGame: selectedGame,
                    leaderboard: leaderboard,
                    isLoadingLeaderboard: isLoadingLeaderboard,
                    personalBests: personalBests,
                    address: address
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 512,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        padding: '80px 20px 20px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        minHeight: '100vh'
                    },
                    children: selectedGame === 'tetris' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CanvasTetris$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                        lineNumber: 529,
                        columnNumber: 13
                    }, this) : selectedGame === 'pacman' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CanvasPacman$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                        lineNumber: 540,
                        columnNumber: 13
                    }, this) : null
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 521,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 552,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 485,
            columnNumber: 7
        }, this);
    }
    // Loading state
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: containerStyle,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$NavigationHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onHomeClick: handleHomeClick,
                onDisconnectWallet: handleDisconnectWallet,
                address: address,
                isConnected: isConnected,
                authed: isAuthenticated,
                isOfflineMode: isOfflineMode
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 560,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LeaderboardPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isPaid: hasPaid,
                isOfflineMode: isOfflineMode,
                selectedGame: selectedGame,
                leaderboard: leaderboard,
                isLoadingLeaderboard: isLoadingLeaderboard,
                personalBests: personalBests,
                address: address
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 568,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: '100px 20px 40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100vh'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: '48px',
                                marginBottom: '20px'
                            },
                            children: "🔄"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 588,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                marginBottom: '20px'
                            },
                            children: "Loading..."
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 589,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: '#B9C1C1'
                            },
                            children: "Initializing 375 Arcade..."
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 590,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 578,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 577,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 593,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 559,
        columnNumber: 5
    }, this);
}
_s(Page, "77Ug4PRyZ2s+L7Sn3eFp8s9I+5Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$scaffold$2d$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWeb3Modal"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useDisconnect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDisconnect"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useSignMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSignMessage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePersistentState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePersistentState"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePersistentState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePersistentState"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePersistentState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePersistentState"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useLeaderboard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLeaderboard"]
    ];
});
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_13ff94b0._.js.map