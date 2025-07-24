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
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100vw',
                    height: '100vh',
                    background: 'rgba(0,0,0,0.9)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '24px',
                    fontFamily: 'sans-serif',
                    zIndex: 99999,
                    margin: 0,
                    padding: 0
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        background: '#333',
                        padding: '40px',
                        borderRadius: '10px',
                        textAlign: 'center',
                        border: '2px solid #666',
                        minWidth: '300px',
                        position: 'relative',
                        maxWidth: '500px',
                        width: '90%'
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
                            lineNumber: 539,
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
                            lineNumber: 568,
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
                                            lineNumber: 570,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CanvasTetris.tsx",
                                    lineNumber: 570,
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
                                            lineNumber: 571,
                                            columnNumber: 35
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CanvasTetris.tsx",
                                    lineNumber: 571,
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
                                            lineNumber: 572,
                                            columnNumber: 35
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CanvasTetris.tsx",
                                    lineNumber: 572,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CanvasTetris.tsx",
                            lineNumber: 569,
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
                                    lineNumber: 576,
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
                                    lineNumber: 581,
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
                                    lineNumber: 587,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CanvasTetris.tsx",
                            lineNumber: 575,
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
                            lineNumber: 600,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CanvasTetris.tsx",
                    lineNumber: 528,
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
// Reset ghosts with proper release'use client';
__turbopack_context__.s({
    "default": ()=>CanvasPacman
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const COLS = 19;
const ROWS = 21;
const BLOCK = 20;
const CANVAS_WIDTH = COLS * BLOCK;
const CANVAS_HEIGHT = ROWS * BLOCK;
// Much slower, more authentic speeds (reduced by ~70%)
const FRAME_RATE = 30; // Reduced from 60 to 30fps for slower movement
const FRAME_INTERVAL = 1000 / FRAME_RATE;
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
// Much slower speed configurations (reduced significantly and further reduced ghost speed)
const SPEED_CONFIG = {
    1: {
        pacman: 0.3,
        ghost: 0.22,
        frightened: 0.15,
        tunnel: 0.1
    },
    2: {
        pacman: 0.35,
        ghost: 0.26,
        frightened: 0.18,
        tunnel: 0.12
    },
    5: {
        pacman: 0.4,
        ghost: 0.30,
        frightened: 0.2,
        tunnel: 0.15
    },
    17: {
        pacman: 0.4,
        ghost: 0.30,
        frightened: 0,
        tunnel: 0.15
    },
    21: {
        pacman: 0.35,
        ghost: 0.30,
        frightened: 0,
        tunnel: 0.15
    }
};
// Power pellet duration per level (in frames at 30fps)
const PELLET_DURATION = {
    1: 180,
    2: 150,
    3: 120,
    4: 90,
    5: 60,
    6: 150,
    7: 60,
    8: 60,
    9: 30,
    10: 150,
    11: 60,
    12: 30,
    13: 30,
    14: 90,
    15: 30,
    16: 30,
    17: 0,
    18: 30,
    19: 0
};
function CanvasPacman(param) {
    let { start, onGameOver, onPlayAgain, onPublishScore, playerAddress } = param;
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const gameLoopRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const mazeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(MAZE.map({
        "CanvasPacman.useRef[mazeRef]": (row)=>[
                ...row
            ]
    }["CanvasPacman.useRef[mazeRef]"]));
    const lastFrameTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const [isGameOver, setIsGameOver] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPublishing, setIsPublishing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pacmanRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 9,
        y: 15,
        dir: 'RIGHT',
        nextDir: 'RIGHT',
        speed: 0.3,
        eating: false,
        eatTimer: 0,
        animFrame: 0
    });
    const ghostsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([
        {
            x: 9,
            y: 9,
            dir: 'UP',
            mode: 'CHASE',
            color: '#FF0000',
            originalColor: '#FF0000',
            personalityType: 'BLINKY',
            releaseTimer: 0,
            frightenedTimer: 0,
            pauseTimer: 0,
            speed: 0.22,
            cornerTargets: [
                {
                    x: 18,
                    y: 0
                },
                {
                    x: 18,
                    y: 5
                }
            ]
        },
        {
            x: 8,
            y: 10,
            dir: 'UP',
            mode: 'CAGE',
            color: '#FFB8FF',
            originalColor: '#FFB8FF',
            personalityType: 'PINKY',
            releaseTimer: 120,
            frightenedTimer: 0,
            pauseTimer: 0,
            speed: 0.22,
            cornerTargets: [
                {
                    x: 0,
                    y: 0
                },
                {
                    x: 5,
                    y: 0
                }
            ]
        },
        {
            x: 9,
            y: 10,
            dir: 'DOWN',
            mode: 'CAGE',
            color: '#00FFFF',
            originalColor: '#00FFFF',
            personalityType: 'INKY',
            releaseTimer: 240,
            frightenedTimer: 0,
            pauseTimer: 0,
            speed: 0.22,
            cornerTargets: [
                {
                    x: 18,
                    y: 20
                },
                {
                    x: 13,
                    y: 20
                }
            ]
        },
        {
            x: 10,
            y: 10,
            dir: 'UP',
            mode: 'CAGE',
            color: '#FFB847',
            originalColor: '#FFB847',
            personalityType: 'CLYDE',
            releaseTimer: 360,
            frightenedTimer: 0,
            pauseTimer: 0,
            speed: 0.22,
            cornerTargets: [
                {
                    x: 0,
                    y: 20
                },
                {
                    x: 5,
                    y: 20
                }
            ]
        }
    ]);
    const cherryRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 9,
        y: 12,
        active: false,
        timer: 0
    });
    const gameStateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        score: 0,
        level: 1,
        lives: 3,
        powerMode: false,
        powerTimer: 0,
        gameOver: false,
        dotsRemaining: 0,
        paused: false,
        frameCount: 0,
        ghostCombo: 0,
        pelletFlashTimer: 0
    });
    const [score, setScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [level, setLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [lives, setLives] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(3);
    // Initialize dot count
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CanvasPacman.useEffect": ()=>{
            const dotCount = MAZE.flat().filter({
                "CanvasPacman.useEffect": (cell)=>cell === 1 || cell === 2
            }["CanvasPacman.useEffect"]).length;
            gameStateRef.current.dotsRemaining = dotCount;
        }
    }["CanvasPacman.useEffect"], []);
    const getCurrentSpeedConfig = ()=>{
        const lvl = gameStateRef.current.level;
        if (lvl >= 21) return SPEED_CONFIG[21];
        if (lvl >= 17) return SPEED_CONFIG[17];
        if (lvl >= 5) return SPEED_CONFIG[5];
        if (lvl >= 2) return SPEED_CONFIG[2];
        return SPEED_CONFIG[1];
    };
    const getPelletDuration = ()=>{
        const lvl = gameStateRef.current.level;
        return PELLET_DURATION[lvl] || 0;
    };
    const canMove = (x, y)=>{
        if (y === 9 && (x < 0 || x >= COLS)) return true; // Tunnel
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
    const getDistance = (x1, y1, x2, y2)=>{
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    };
    const getGhostTarget = (ghost)=>{
        const pacman = pacmanRef.current;
        if (ghost.mode === 'SCATTER') {
            return ghost.cornerTargets[0];
        }
        if (ghost.mode === 'FRIGHTENED' || ghost.mode === 'CAGE') {
            return {
                x: Math.floor(Math.random() * COLS),
                y: Math.floor(Math.random() * ROWS)
            };
        }
        if (ghost.mode === 'EATEN' || ghost.mode === 'RETURNING') {
            return {
                x: 9,
                y: 9
            }; // Return to ghost house
        }
        // Chase mode - different AI per ghost
        switch(ghost.personalityType){
            case 'BLINKY':
                return {
                    x: pacman.x,
                    y: pacman.y
                };
            case 'PINKY':
                const pOffset = getDirectionOffset(pacman.dir);
                return {
                    x: pacman.x + pOffset.dx * 4,
                    y: pacman.y + pOffset.dy * 4
                };
            case 'INKY':
                const blinky = ghostsRef.current[0];
                const iOffset = getDirectionOffset(pacman.dir);
                const midX = pacman.x + iOffset.dx * 2;
                const midY = pacman.y + iOffset.dy * 2;
                return {
                    x: midX + (midX - blinky.x),
                    y: midY + (midY - blinky.y)
                };
            case 'CLYDE':
                const dist = getDistance(ghost.x, ghost.y, pacman.x, pacman.y);
                if (dist > 8) {
                    return {
                        x: pacman.x,
                        y: pacman.y
                    };
                } else {
                    return ghost.cornerTargets[0];
                }
            default:
                return {
                    x: pacman.x,
                    y: pacman.y
                };
        }
    };
    const movePacman = ()=>{
        const pacman = pacmanRef.current;
        const speedConfig = getCurrentSpeedConfig();
        if (pacman.eating && pacman.eatTimer > 0) {
            pacman.eatTimer--;
            return; // Pacman stops briefly when eating
        }
        pacman.eating = false;
        // Much slower movement - only move every few frames
        if (gameStateRef.current.frameCount % Math.ceil(1 / speedConfig.pacman) !== 0) {
            return;
        }
        // Check if we can change direction
        const nextOffset = getDirectionOffset(pacman.nextDir);
        if (canMove(pacman.x + nextOffset.dx, pacman.y + nextOffset.dy)) {
            pacman.dir = pacman.nextDir;
        }
        const offset = getDirectionOffset(pacman.dir);
        const newX = pacman.x + offset.dx;
        const newY = pacman.y + offset.dy;
        if (canMove(newX, newY)) {
            pacman.x = newX;
            pacman.y = newY;
            // Handle tunnel teleportation
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
                pacman.eating = true;
                pacman.eatTimer = 2; // Brief pause
            } else if (cell === 2) {
                mazeRef.current[pacman.y][pacman.x] = 3;
                gameStateRef.current.score += 50;
                gameStateRef.current.dotsRemaining--;
                gameStateRef.current.powerMode = true;
                gameStateRef.current.powerTimer = getPelletDuration();
                gameStateRef.current.ghostCombo = 0;
                // Make all active ghosts frightened
                ghostsRef.current.forEach((g)=>{
                    if (g.mode !== 'CAGE' && g.mode !== 'EATEN' && g.mode !== 'RETURNING') {
                        g.mode = 'FRIGHTENED';
                        g.frightenedTimer = gameStateRef.current.powerTimer;
                        // Reverse direction when becoming frightened
                        g.dir = g.dir === 'UP' ? 'DOWN' : g.dir === 'DOWN' ? 'UP' : g.dir === 'LEFT' ? 'RIGHT' : 'LEFT';
                    }
                });
                setScore(gameStateRef.current.score);
                pacman.eating = true;
                pacman.eatTimer = 5; // Longer pause for power pellet
            }
            pacman.animFrame = (pacman.animFrame + 1) % 8;
        }
    };
    const moveGhost = (ghost)=>{
        if (ghost.pauseTimer > 0) {
            ghost.pauseTimer--;
            return;
        }
        if (ghost.mode === 'CAGE') {
            if (ghost.releaseTimer > 0) {
                ghost.releaseTimer--;
                return;
            } else {
                ghost.mode = 'CHASE';
                ghost.x = 9; // Ensure proper positioning
                ghost.y = 9; // Move out of cage to center
            }
        }
        // Handle returning to cage after being eaten
        if (ghost.mode === 'RETURNING') {
            if (ghost.x === 9 && ghost.y === 9) {
                ghost.mode = 'CHASE';
                ghost.color = ghost.originalColor;
                ghost.frightenedTimer = 0;
            }
        }
        // Much slower ghost movement
        const speedConfig = getCurrentSpeedConfig();
        const moveInterval = Math.ceil(1 / (ghost.mode === 'FRIGHTENED' ? speedConfig.frightened : ghost.mode === 'EATEN' || ghost.mode === 'RETURNING' ? speedConfig.ghost * 2 : speedConfig.ghost));
        if (gameStateRef.current.frameCount % moveInterval !== 0) {
            return;
        }
        const target = getGhostTarget(ghost);
        const directions = [
            'UP',
            'DOWN',
            'LEFT',
            'RIGHT'
        ];
        const possibleDirs = directions.filter((dir)=>{
            const offset = getDirectionOffset(dir);
            const newX = ghost.x + offset.dx;
            const newY = ghost.y + offset.dy;
            return canMove(newX, newY) && !(dir === 'UP' && ghost.dir === 'DOWN') && !(dir === 'DOWN' && ghost.dir === 'UP') && !(dir === 'LEFT' && ghost.dir === 'RIGHT') && !(dir === 'RIGHT' && ghost.dir === 'LEFT');
        });
        if (possibleDirs.length > 0) {
            if (ghost.mode === 'FRIGHTENED') {
                // Random movement when frightened
                ghost.dir = possibleDirs[Math.floor(Math.random() * possibleDirs.length)];
            } else {
                // Find direction that minimizes distance to target
                let bestDir = ghost.dir;
                let bestDistance = Infinity;
                possibleDirs.forEach((dir)=>{
                    const offset = getDirectionOffset(dir);
                    const newX = ghost.x + offset.dx;
                    const newY = ghost.y + offset.dy;
                    const distance = getDistance(newX, newY, target.x, target.y);
                    if (distance < bestDistance) {
                        bestDistance = distance;
                        bestDir = dir;
                    }
                });
                ghost.dir = bestDir;
            }
        }
        const offset = getDirectionOffset(ghost.dir);
        const newX = ghost.x + offset.dx;
        const newY = ghost.y + offset.dy;
        if (canMove(newX, newY)) {
            ghost.x = newX;
            ghost.y = newY;
            // Handle tunnel
            if (ghost.y === 9) {
                if (ghost.x < 0) ghost.x = COLS - 1;
                if (ghost.x >= COLS) ghost.x = 0;
            }
        }
    };
    const moveGhosts = ()=>{
        ghostsRef.current.forEach((ghost)=>{
            // Update frightened timer
            if (ghost.mode === 'FRIGHTENED' && ghost.frightenedTimer > 0) {
                ghost.frightenedTimer--;
                if (ghost.frightenedTimer <= 0) {
                    ghost.mode = 'CHASE';
                    ghost.color = ghost.originalColor;
                }
            }
            moveGhost(ghost);
        });
    };
    const checkCollisions = ()=>{
        const pacman = pacmanRef.current;
        if (gameStateRef.current.paused) return;
        ghostsRef.current.forEach((ghost, index)=>{
            if (ghost.x === pacman.x && ghost.y === pacman.y) {
                if (ghost.mode === 'FRIGHTENED') {
                    // Eat ghost
                    gameStateRef.current.ghostCombo++;
                    const points = 200 * Math.pow(2, gameStateRef.current.ghostCombo - 1);
                    gameStateRef.current.score += points;
                    setScore(gameStateRef.current.score);
                    ghost.mode = 'RETURNING';
                    ghost.color = '#666666'; // Gray for eaten ghost
                    // Pause the entire game for 1 second when eating ghost
                    gameStateRef.current.paused = true;
                    setTimeout(()=>{
                        if (!gameStateRef.current.gameOver) {
                            gameStateRef.current.paused = false;
                        }
                    }, 1000); // 1 second pause
                } else if (ghost.mode !== 'EATEN' && ghost.mode !== 'RETURNING') {
                    // Ghost caught Pacman
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
                        pacman.eating = false;
                        pacman.eatTimer = 0;
                        // Reset ghosts
                        const speedConfig = getCurrentSpeedConfig();
                        ghostsRef.current.forEach((g, i)=>{
                            if (i === 0) {
                                g.x = 9;
                                g.y = 9; // Blinky starts in center
                            } else {
                                // Properly position other ghosts in cage
                                g.x = 7 + i;
                                g.y = 10; // Spread them out more
                            }
                            g.mode = i === 0 ? 'CHASE' : 'CAGE';
                            g.dir = i % 2 === 0 ? 'UP' : 'DOWN';
                            g.speed = speedConfig.ghost;
                            g.frightenedTimer = 0;
                            g.pauseTimer = 0;
                            g.color = g.originalColor;
                            g.releaseTimer = i === 0 ? 0 : i * 120; // Stagger release every 4 seconds
                        });
                        gameStateRef.current.powerMode = false;
                        gameStateRef.current.powerTimer = 0;
                        gameStateRef.current.ghostCombo = 0;
                        // Brief pause
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
    const updateCherry = ()=>{
        const cherry = cherryRef.current;
        if (!cherry.active) {
            // Random chance to spawn cherry (roughly every 15 seconds)
            if (Math.random() < 0.001) {
                cherry.active = true;
                cherry.timer = FRAME_RATE * 15; // 15 seconds
                // Random position in playable area, ensuring it's not in walls
                let attempts = 0;
                do {
                    cherry.x = Math.floor(Math.random() * (COLS - 2)) + 1; // Avoid edges
                    cherry.y = Math.floor(Math.random() * (ROWS - 2)) + 1; // Avoid edges
                    attempts++;
                }while (mazeRef.current[cherry.y][cherry.x] === 0 && attempts < 50)
                // If we can't find a good spot, don't spawn
                if (attempts >= 50) {
                    cherry.active = false;
                }
            }
        } else {
            cherry.timer--;
            if (cherry.timer <= 0) {
                cherry.active = false;
            }
            // Check if Pacman ate cherry
            const pacman = pacmanRef.current;
            if (pacman.x === cherry.x && pacman.y === cherry.y) {
                gameStateRef.current.score += 100;
                setScore(gameStateRef.current.score);
                cherry.active = false;
            }
        }
    };
    const checkLevelComplete = ()=>{
        if (gameStateRef.current.dotsRemaining <= 0) {
            gameStateRef.current.level++;
            gameStateRef.current.score += 1000;
            setLevel(gameStateRef.current.level);
            setScore(gameStateRef.current.score);
            // Reset maze
            mazeRef.current = MAZE.map((row)=>[
                    ...row
                ]);
            gameStateRef.current.dotsRemaining = MAZE.flat().filter((cell)=>cell === 1 || cell === 2).length;
            // Reset positions
            const pacman = pacmanRef.current;
            pacman.x = 9;
            pacman.y = 15;
            pacman.dir = 'RIGHT';
            pacman.nextDir = 'RIGHT';
            pacman.eating = false;
            pacman.eatTimer = 0;
            pacman.animFrame = 0;
            // Reset ghosts with new speeds
            const speedConfig = getCurrentSpeedConfig();
            ghostsRef.current.forEach((g, i)=>{
                if (i === 0) {
                    g.x = 9;
                    g.y = 9; // Blinky starts in center
                } else {
                    // Properly position other ghosts in cage
                    g.x = 7 + i;
                    g.y = 10; // Spread them out more
                }
                g.mode = i === 0 ? 'CHASE' : 'CAGE';
                g.dir = i % 2 === 0 ? 'UP' : 'DOWN';
                g.speed = speedConfig.ghost;
                g.frightenedTimer = 0;
                g.pauseTimer = 0;
                g.color = g.originalColor;
                g.releaseTimer = i === 0 ? 0 : i * 120; // Stagger release every 4 seconds
            });
            gameStateRef.current.powerMode = false;
            gameStateRef.current.powerTimer = 0;
            gameStateRef.current.ghostCombo = 0;
            cherryRef.current.active = false;
        }
    };
    const gameLoop = (currentTime)=>{
        if (gameStateRef.current.gameOver) return;
        // Maintain consistent 30fps frame rate
        if (currentTime - lastFrameTimeRef.current < FRAME_INTERVAL) {
            gameLoopRef.current = requestAnimationFrame(gameLoop);
            return;
        }
        lastFrameTimeRef.current = currentTime;
        if (!gameStateRef.current.paused) {
            gameStateRef.current.frameCount++;
            movePacman();
            moveGhosts();
            checkCollisions();
            updateCherry();
            checkLevelComplete();
            // Update power mode
            if (gameStateRef.current.powerMode) {
                gameStateRef.current.powerTimer--;
                if (gameStateRef.current.powerTimer <= 0) {
                    gameStateRef.current.powerMode = false;
                    ghostsRef.current.forEach((g)=>{
                        if (g.mode === 'FRIGHTENED') {
                            g.mode = 'CHASE';
                            g.color = g.originalColor;
                            g.frightenedTimer = 0;
                        }
                    });
                }
            }
        }
        draw();
        gameLoopRef.current = requestAnimationFrame(gameLoop);
    };
    const draw = ()=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        // Draw maze
        ctx.strokeStyle = '#0000FF';
        ctx.lineWidth = 2;
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
                        // Power pellet with flashing effect
                        const flash = gameStateRef.current.frameCount % 20 < 10;
                        ctx.fillStyle = flash ? '#FFFF00' : '#FFFFFF';
                        ctx.beginPath();
                        ctx.arc(px + BLOCK / 2, py + BLOCK / 2, 6, 0, Math.PI * 2);
                        ctx.fill();
                        break;
                }
            });
        });
        // Draw cherry (only if in valid position)
        const cherry = cherryRef.current;
        if (cherry.active && cherry.x >= 0 && cherry.x < COLS && cherry.y >= 0 && cherry.y < ROWS) {
            ctx.fillStyle = '#FF0000';
            ctx.beginPath();
            ctx.arc(cherry.x * BLOCK + BLOCK / 2, cherry.y * BLOCK + BLOCK / 2, 4, 0, Math.PI * 2);
            ctx.fill();
            // Cherry stem
            ctx.strokeStyle = '#00FF00';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(cherry.x * BLOCK + BLOCK / 2, cherry.y * BLOCK + BLOCK / 2 - 4);
            ctx.lineTo(cherry.x * BLOCK + BLOCK / 2 - 2, cherry.y * BLOCK + BLOCK / 2 - 8);
            ctx.stroke();
        }
        // Draw Pacman with better graphics
        const pac = pacmanRef.current;
        const pacX = pac.x * BLOCK + BLOCK / 2;
        const pacY = pac.y * BLOCK + BLOCK / 2;
        ctx.fillStyle = '#FFFF00';
        ctx.beginPath();
        ctx.arc(pacX, pacY, BLOCK / 2 - 1, 0, Math.PI * 2);
        ctx.fill();
        // Pacman mouth animation
        const mouthAngle = Math.PI / 3;
        const mouthOpen = pac.animFrame < 4;
        const actualMouthAngle = mouthOpen ? mouthAngle : Math.PI / 8;
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
            ctx.arc(pacX, pacY, BLOCK / 2 - 1, startAngle, startAngle + actualMouthAngle, false);
            ctx.closePath();
            ctx.fill();
        }
        // Draw ghosts with MUCH better graphics
        ghostsRef.current.forEach((ghost)=>{
            const gx = ghost.x * BLOCK + BLOCK / 2;
            const gy = ghost.y * BLOCK + BLOCK / 2;
            if (ghost.mode === 'EATEN' || ghost.mode === 'RETURNING') {
                // Just draw eyes when eaten/returning
                ctx.fillStyle = '#FFF';
                ctx.fillRect(gx - 6, gy - 6, 4, 4);
                ctx.fillRect(gx + 2, gy - 6, 4, 4);
                ctx.fillStyle = '#000';
                ctx.fillRect(gx - 5, gy - 5, 2, 2);
                ctx.fillRect(gx + 3, gy - 5, 2, 2);
                return;
            }
            // Ghost body color
            if (ghost.mode === 'FRIGHTENED') {
                // Flashing blue/white when frightened
                const flashTime = ghost.frightenedTimer;
                if (flashTime < 60 && flashTime % 10 < 5) {
                    ctx.fillStyle = '#FFFFFF';
                } else {
                    ctx.fillStyle = '#0000FF';
                }
            } else {
                ctx.fillStyle = ghost.originalColor;
            }
            // Draw proper ghost shape - rounded top, wavy bottom
            ctx.beginPath();
            // Top semicircle
            ctx.arc(gx, gy - 4, BLOCK / 2 - 1, Math.PI, 0, false);
            // Straight sides down
            ctx.lineTo(gx + BLOCK / 2 - 1, gy + BLOCK / 2 - 1);
            // Wavy bottom edge
            const waveWidth = (BLOCK - 2) / 3;
            for(let i = 0; i < 3; i++){
                const waveX = gx + BLOCK / 2 - 1 - waveWidth * (i + 1);
                const waveY = gy + BLOCK / 2 - 1 + (i % 2 === 0 ? -4 : 0);
                ctx.lineTo(waveX, waveY);
            }
            // Close path back to start
            ctx.lineTo(gx - BLOCK / 2 + 1, gy + BLOCK / 2 - 1);
            ctx.closePath();
            ctx.fill();
            // Ghost eyes - much better looking
            ctx.fillStyle = '#FFFFFF';
            // Left eye
            ctx.beginPath();
            ctx.arc(gx - 4, gy - 4, 3, 0, Math.PI * 2);
            ctx.fill();
            // Right eye  
            ctx.beginPath();
            ctx.arc(gx + 4, gy - 4, 3, 0, Math.PI * 2);
            ctx.fill();
            // Eye pupils - look in movement direction
            ctx.fillStyle = '#000000';
            let eyeOffsetX = 0, eyeOffsetY = 0;
            switch(ghost.dir){
                case 'LEFT':
                    eyeOffsetX = -1;
                    break;
                case 'RIGHT':
                    eyeOffsetX = 1;
                    break;
                case 'UP':
                    eyeOffsetY = -1;
                    break;
                case 'DOWN':
                    eyeOffsetY = 1;
                    break;
            }
            // Left pupil
            ctx.beginPath();
            ctx.arc(gx - 4 + eyeOffsetX, gy - 4 + eyeOffsetY, 1, 0, Math.PI * 2);
            ctx.fill();
            // Right pupil
            ctx.beginPath();
            ctx.arc(gx + 4 + eyeOffsetX, gy - 4 + eyeOffsetY, 1, 0, Math.PI * 2);
            ctx.fill();
        });
    };
    // Keyboard controls
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
                            break;
                        case 'ArrowDown':
                        case 'KeyS':
                            e.preventDefault();
                            pac.nextDir = 'DOWN';
                            break;
                        case 'ArrowLeft':
                        case 'KeyA':
                            e.preventDefault();
                            pac.nextDir = 'LEFT';
                            break;
                        case 'ArrowRight':
                        case 'KeyD':
                            e.preventDefault();
                            pac.nextDir = 'RIGHT';
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
    // Game initialization
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CanvasPacman.useEffect": ()=>{
            if (start && !gameStateRef.current.gameOver) {
                // Reset game state
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
                    frameCount: 0,
                    ghostCombo: 0,
                    pelletFlashTimer: 0
                };
                setScore(0);
                setLevel(1);
                setLives(3);
                setIsGameOver(false);
                // Reset maze
                mazeRef.current = MAZE.map({
                    "CanvasPacman.useEffect": (row)=>[
                            ...row
                        ]
                }["CanvasPacman.useEffect"]);
                // Reset Pacman
                pacmanRef.current = {
                    x: 9,
                    y: 15,
                    dir: 'RIGHT',
                    nextDir: 'RIGHT',
                    speed: 0.3,
                    eating: false,
                    eatTimer: 0,
                    animFrame: 0
                };
                // Reset ghosts with proper release timers and positioning
                ghostsRef.current = [
                    {
                        x: 9,
                        y: 9,
                        dir: 'UP',
                        mode: 'CHASE',
                        color: '#FF0000',
                        originalColor: '#FF0000',
                        personalityType: 'BLINKY',
                        releaseTimer: 0,
                        frightenedTimer: 0,
                        pauseTimer: 0,
                        speed: 0.22,
                        cornerTargets: [
                            {
                                x: 18,
                                y: 0
                            },
                            {
                                x: 18,
                                y: 5
                            }
                        ]
                    },
                    {
                        x: 8,
                        y: 10,
                        dir: 'UP',
                        mode: 'CAGE',
                        color: '#FFB8FF',
                        originalColor: '#FFB8FF',
                        personalityType: 'PINKY',
                        releaseTimer: 120,
                        frightenedTimer: 0,
                        pauseTimer: 0,
                        speed: 0.22,
                        cornerTargets: [
                            {
                                x: 0,
                                y: 0
                            },
                            {
                                x: 5,
                                y: 0
                            }
                        ]
                    },
                    {
                        x: 9,
                        y: 10,
                        dir: 'DOWN',
                        mode: 'CAGE',
                        color: '#00FFFF',
                        originalColor: '#00FFFF',
                        personalityType: 'INKY',
                        releaseTimer: 240,
                        frightenedTimer: 0,
                        pauseTimer: 0,
                        speed: 0.22,
                        cornerTargets: [
                            {
                                x: 18,
                                y: 20
                            },
                            {
                                x: 13,
                                y: 20
                            }
                        ]
                    },
                    {
                        x: 10,
                        y: 10,
                        dir: 'UP',
                        mode: 'CAGE',
                        color: '#FFB847',
                        originalColor: '#FFB847',
                        personalityType: 'CLYDE',
                        releaseTimer: 360,
                        frightenedTimer: 0,
                        pauseTimer: 0,
                        speed: 0.22,
                        cornerTargets: [
                            {
                                x: 0,
                                y: 20
                            },
                            {
                                x: 5,
                                y: 20
                            }
                        ]
                    }
                ];
                // Reset cherry
                cherryRef.current = {
                    x: 9,
                    y: 12,
                    active: false,
                    timer: 0
                };
                // Start game loop
                lastFrameTimeRef.current = performance.now();
                gameLoopRef.current = requestAnimationFrame(gameLoop);
            }
            return ({
                "CanvasPacman.useEffect": ()=>{
                    if (gameLoopRef.current) {
                        cancelAnimationFrame(gameLoopRef.current);
                    }
                }
            })["CanvasPacman.useEffect"];
        }
    }["CanvasPacman.useEffect"], [
        start
    ]);
    // Game over handlers
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
                chainId: ("TURBOPACK compile-time value", "1270"),
                gameType: 'pacman',
                version: '2.0'
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
        className: "jsx-a58dbfef7be8da39",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: "".concat(-60 * scale, "px"),
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 10,
                    pointerEvents: 'none'
                },
                className: "jsx-a58dbfef7be8da39",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        background: 'linear-gradient(135deg, rgba(8, 8, 12, 0.9) 0%, rgba(15, 15, 20, 0.9) 100%)',
                        border: '2px solid rgba(255, 215, 0, 0.3)',
                        borderRadius: '12px',
                        padding: '8px 16px',
                        backdropFilter: 'blur(8px)',
                        display: 'flex',
                        gap: '20px',
                        alignItems: 'center',
                        fontSize: "".concat(12 * scale, "px"),
                        fontFamily: 'monospace',
                        fontWeight: 'bold',
                        color: '#FFFF00'
                    },
                    className: "jsx-a58dbfef7be8da39",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-a58dbfef7be8da39",
                            children: [
                                "Score: ",
                                score.toLocaleString()
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CanvasPacman.tsx",
                            lineNumber: 1016,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-a58dbfef7be8da39",
                            children: [
                                "Level: ",
                                level
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CanvasPacman.tsx",
                            lineNumber: 1017,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px'
                            },
                            className: "jsx-a58dbfef7be8da39",
                            children: [
                                "Lives: ",
                                Array.from({
                                    length: lives
                                }, (_, i)=>'🧡').join('')
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CanvasPacman.tsx",
                            lineNumber: 1018,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CanvasPacman.tsx",
                    lineNumber: 1002,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/CanvasPacman.tsx",
                lineNumber: 991,
                columnNumber: 7
            }, this),
            gameStateRef.current.powerMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: "".concat(-100 * scale, "px"),
                    left: '50%',
                    transform: 'translateX(-50%)',
                    color: '#00FFFF',
                    fontFamily: 'monospace',
                    fontSize: "".concat(14 * scale, "px"),
                    fontWeight: 'bold',
                    animation: 'blink 0.5s infinite'
                },
                className: "jsx-a58dbfef7be8da39",
                children: [
                    "POWER MODE: ",
                    Math.ceil(gameStateRef.current.powerTimer / FRAME_RATE),
                    "s"
                ]
            }, void 0, true, {
                fileName: "[project]/components/CanvasPacman.tsx",
                lineNumber: 1026,
                columnNumber: 9
            }, this),
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
                },
                className: "jsx-a58dbfef7be8da39"
            }, void 0, false, {
                fileName: "[project]/components/CanvasPacman.tsx",
                lineNumber: 1041,
                columnNumber: 7
            }, this),
            isGameOver && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100vw',
                    height: '100vh',
                    background: 'rgba(0,0,0,0.9)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '24px',
                    fontFamily: 'sans-serif',
                    zIndex: 99999,
                    margin: 0,
                    padding: 0
                },
                className: "jsx-a58dbfef7be8da39",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        background: '#333',
                        padding: '40px',
                        borderRadius: '10px',
                        textAlign: 'center',
                        border: '2px solid #FFD700',
                        minWidth: '300px',
                        position: 'relative',
                        maxWidth: '500px',
                        width: '90%'
                    },
                    className: "jsx-a58dbfef7be8da39",
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
                            className: "jsx-a58dbfef7be8da39",
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/components/CanvasPacman.tsx",
                            lineNumber: 1085,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                margin: '0 0 20px 0',
                                color: '#FFD700'
                            },
                            className: "jsx-a58dbfef7be8da39",
                            children: "Game Over!"
                        }, void 0, false, {
                            fileName: "[project]/components/CanvasPacman.tsx",
                            lineNumber: 1116,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: '18px',
                                marginBottom: '20px'
                            },
                            className: "jsx-a58dbfef7be8da39",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-a58dbfef7be8da39",
                                    children: [
                                        "Final Score: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: '#FFFF00'
                                            },
                                            className: "jsx-a58dbfef7be8da39",
                                            children: gameStateRef.current.score.toLocaleString()
                                        }, void 0, false, {
                                            fileName: "[project]/components/CanvasPacman.tsx",
                                            lineNumber: 1118,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CanvasPacman.tsx",
                                    lineNumber: 1118,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-a58dbfef7be8da39",
                                    children: [
                                        "Level Reached: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: '#FF69B4'
                                            },
                                            className: "jsx-a58dbfef7be8da39",
                                            children: gameStateRef.current.level
                                        }, void 0, false, {
                                            fileName: "[project]/components/CanvasPacman.tsx",
                                            lineNumber: 1119,
                                            columnNumber: 35
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CanvasPacman.tsx",
                                    lineNumber: 1119,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CanvasPacman.tsx",
                            lineNumber: 1117,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: '10px',
                                justifyContent: 'center',
                                flexWrap: 'wrap'
                            },
                            className: "jsx-a58dbfef7be8da39",
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
                                    className: "jsx-a58dbfef7be8da39",
                                    children: "Play Again"
                                }, void 0, false, {
                                    fileName: "[project]/components/CanvasPacman.tsx",
                                    lineNumber: 1123,
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
                                    className: "jsx-a58dbfef7be8da39",
                                    children: "🐦 Tweet Score"
                                }, void 0, false, {
                                    fileName: "[project]/components/CanvasPacman.tsx",
                                    lineNumber: 1138,
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
                                    className: "jsx-a58dbfef7be8da39",
                                    children: isPublishing ? '⏳ Publishing...' : '🏆 Publish to Leaderboards'
                                }, void 0, false, {
                                    fileName: "[project]/components/CanvasPacman.tsx",
                                    lineNumber: 1154,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CanvasPacman.tsx",
                            lineNumber: 1122,
                            columnNumber: 13
                        }, this),
                        isPublishing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginTop: '15px',
                                fontSize: '14px',
                                color: '#95a5a6'
                            },
                            className: "jsx-a58dbfef7be8da39",
                            children: "Sign the transaction in your wallet to publish your score to the blockchain"
                        }, void 0, false, {
                            fileName: "[project]/components/CanvasPacman.tsx",
                            lineNumber: 1174,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CanvasPacman.tsx",
                    lineNumber: 1074,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/CanvasPacman.tsx",
                lineNumber: 1056,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "a58dbfef7be8da39",
                children: "@keyframes blink{0%,50%{opacity:1}51%,to{opacity:0}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/CanvasPacman.tsx",
        lineNumber: 989,
        columnNumber: 5
    }, this);
}
_s(CanvasPacman, "mW1I67vJGtnkl7a4tlWps5pA/3k=");
_c = CanvasPacman;
var _c;
__turbopack_context__.k.register(_c, "CanvasPacman");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/utils/responsive.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "getGameContainerScale": ()=>getGameContainerScale,
    "getLeaderboardScale": ()=>getLeaderboardScale,
    "getResponsiveStyles": ()=>getResponsiveStyles
});
const getResponsiveStyles = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const width = window.innerWidth;
    const height = window.innerHeight;
    // Calculate scale based on both width and height
    const widthScale = Math.min(width / 1920, 1);
    const heightScale = Math.min(height / 1080, 1);
    const scale = Math.min(widthScale, heightScale);
    // Very small screens (phones)
    if (width < 480) {
        return {
            fontSize: "".concat(Math.max(12, 14 * scale), "px"),
            padding: "".concat(Math.max(8, 10 * scale), "px"),
            cardPadding: "".concat(Math.max(15, 20 * scale), "px"),
            titleMaxWidth: "".concat(Math.max(200, 280 * scale), "px")
        };
    } else if (width < 768) {
        return {
            fontSize: "".concat(Math.max(13, 15 * scale), "px"),
            padding: "".concat(Math.max(12, 15 * scale), "px"),
            cardPadding: "".concat(Math.max(20, 30 * scale), "px"),
            titleMaxWidth: "".concat(Math.max(250, 350 * scale), "px")
        };
    } else if (width < 1024) {
        return {
            fontSize: "".concat(Math.max(14, 16 * scale), "px"),
            padding: "".concat(Math.max(15, 18 * scale), "px"),
            cardPadding: "".concat(Math.max(25, 35 * scale), "px"),
            titleMaxWidth: "".concat(Math.max(300, 380 * scale), "px")
        };
    } else if (width < 1920 || height < 1080) {
        return {
            fontSize: "".concat(Math.max(14, 16 * scale), "px"),
            padding: "".concat(Math.max(16, 20 * scale), "px"),
            cardPadding: "".concat(Math.max(30, 40 * scale), "px"),
            titleMaxWidth: "".concat(Math.max(320, 400 * scale), "px")
        };
    } else {
        return {
            fontSize: '16px',
            padding: '20px',
            cardPadding: '40px',
            titleMaxWidth: '400px'
        };
    }
};
const getGameContainerScale = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const width = window.innerWidth;
    const height = window.innerHeight;
    // Calculate available space (minus headers, footers, padding)
    const availableWidth = width * 0.9;
    const availableHeight = height * 0.75;
    // Base game container size
    const baseWidth = 600;
    const baseHeight = 500;
    const scaleX = availableWidth / baseWidth;
    const scaleY = availableHeight / baseHeight;
    return Math.min(scaleX, scaleY, 1.2); // Max scale of 1.2x
};
const getLeaderboardScale = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const width = window.innerWidth;
    const height = window.innerHeight;
    if (width < 768) {
        return {
            width: "".concat(Math.min(300, width * 0.9), "px"),
            fontSize: '12px'
        };
    } else if (width < 1024) {
        return {
            width: "".concat(Math.min(320, width * 0.25), "px"),
            fontSize: '14px'
        };
    } else {
        return {
            width: "".concat(Math.min(350, width * 0.2), "px"),
            fontSize: '16px'
        };
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/layout/NavigationHeader.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>NavigationHeader
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$responsive$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/responsive.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function NavigationHeader(param) {
    let { onHomeClick, onDisconnectWallet, address, isConnected, authed, isOfflineMode } = param;
    _s();
    const responsiveStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$responsive$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getResponsiveStyles"])();
    const [activeDropdown, setActiveDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleMouseEnter = (dropdown)=>{
        setActiveDropdown(dropdown);
    };
    const handleMouseLeave = ()=>{
        setActiveDropdown(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "2e687465ab089a90",
                children: ".header-button-hover.jsx-2e687465ab089a90{transition:all .4s cubic-bezier(.4,0,.2,1)!important}.header-button-hover.jsx-2e687465ab089a90:hover{transform:translateY(-2px)!important}.home-button-hover.jsx-2e687465ab089a90:hover{background:linear-gradient(135deg,rgba(156,163,175,.3) 0%,rgba(156,163,175,.1) 100%)!important;border:2px solid rgba(156,163,175,.5)!important;box-shadow:0 4px 15px rgba(156,163,175,.3)!important}.faucet-button-hover.jsx-2e687465ab089a90:hover,.irys-button-hover.jsx-2e687465ab089a90:hover{background:linear-gradient(135deg,rgba(80,255,214,.3) 0%,rgba(80,255,214,.1) 100%)!important;border:2px solid rgba(80,255,214,.5)!important;box-shadow:0 4px 15px rgba(80,255,214,.3)!important}.ai375-button-hover.jsx-2e687465ab089a90:hover,.global-button-hover.jsx-2e687465ab089a90:hover{background:linear-gradient(135deg,rgba(255,61,20,.3) 0%,rgba(255,61,20,.1) 100%)!important;border:2px solid rgba(255,61,20,.5)!important;box-shadow:0 4px 15px rgba(255,61,20,.3)!important}.disconnect-button-hover.jsx-2e687465ab089a90{transition:all .3s!important}.disconnect-button-hover.jsx-2e687465ab089a90:hover{background:linear-gradient(135deg,rgba(239,68,68,.4) 0%,rgba(239,68,68,.1) 100%)!important;border:1px solid rgba(239,68,68,.5)!important;transform:translateY(-1px)!important;box-shadow:0 2px 10px rgba(239,68,68,.3)!important}.wallet-address-display.jsx-2e687465ab089a90{transition:all .3s!important}.wallet-address-display.jsx-2e687465ab089a90:hover{background:linear-gradient(135deg,rgba(80,255,214,.3) 0%,rgba(80,255,214,.1) 100%)!important;border:1px solid rgba(80,255,214,.5)!important;transform:translateY(-1px)!important;box-shadow:0 2px 10px rgba(80,255,214,.3)!important}.dropdown-menu.jsx-2e687465ab089a90{-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);z-index:1200;opacity:0;background:linear-gradient(135deg,rgba(8,8,12,.95) 0%,rgba(15,15,20,.95) 100%);border:1px solid rgba(80,255,214,.3);border-radius:8px;min-width:150px;margin-top:2px;animation:.2s ease-out forwards dropdownSlideIn;position:absolute;top:100%;left:50%;transform:translate(-50%)translateY(-10px);box-shadow:0 8px 25px rgba(0,0,0,.5)}@keyframes dropdownSlideIn{0%{opacity:0;transform:translate(-50%)translateY(-10px)}to{opacity:1;transform:translate(-50%)translateY(0)}}.dropdown-item.jsx-2e687465ab089a90{color:#e5e7eb;text-align:center;cursor:pointer;border-bottom:1px solid rgba(80,255,214,.1);justify-content:center;align-items:center;padding:12px 20px;font-size:14px;font-weight:500;text-decoration:none;transition:all .2s;display:flex}.dropdown-item.jsx-2e687465ab089a90:last-child{border-bottom:none}.dropdown-item.jsx-2e687465ab089a90:hover{color:#50ffd6;background:linear-gradient(135deg,rgba(80,255,214,.2) 0%,rgba(80,255,214,.1) 100%)}"
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                className: "jsx-2e687465ab089a90",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '20px'
                        },
                        className: "jsx-2e687465ab089a90",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: '16px',
                                flexWrap: 'wrap'
                            },
                            className: "jsx-2e687465ab089a90",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onHomeClick,
                                    style: {
                                        background: 'linear-gradient(135deg, rgba(156, 163, 175, 0.15) 0%, rgba(156, 163, 175, 0.05) 100%)',
                                        border: '2px solid transparent',
                                        borderRadius: '12px',
                                        padding: '10px 20px',
                                        color: '#9CA3AF',
                                        fontSize: responsiveStyles.fontSize,
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px'
                                    },
                                    className: "jsx-2e687465ab089a90" + " " + "header-button-hover home-button-hover",
                                    children: "HOME"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/NavigationHeader.tsx",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: 'relative'
                                    },
                                    onMouseEnter: ()=>handleMouseEnter('375ai'),
                                    onMouseLeave: handleMouseLeave,
                                    className: "jsx-2e687465ab089a90",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            style: {
                                                background: 'linear-gradient(135deg, rgba(255, 61, 20, 0.15) 0%, rgba(255, 61, 20, 0.05) 100%)',
                                                border: '2px solid transparent',
                                                borderRadius: '12px',
                                                padding: '10px 20px',
                                                color: '#FF3D14',
                                                fontSize: responsiveStyles.fontSize,
                                                fontWeight: 600,
                                                cursor: 'pointer',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.5px'
                                            },
                                            className: "jsx-2e687465ab089a90" + " " + "header-button-hover ai375-button-hover",
                                            children: "What is 375ai? ▼"
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/NavigationHeader.tsx",
                                            lineNumber: 173,
                                            columnNumber: 15
                                        }, this),
                                        activeDropdown === '375ai' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onMouseEnter: ()=>handleMouseEnter('375ai'),
                                            onMouseLeave: handleMouseLeave,
                                            className: "jsx-2e687465ab089a90" + " " + "dropdown-menu",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "https://375.ai/about",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "jsx-2e687465ab089a90" + " " + "dropdown-item",
                                                    children: "ABOUT"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/NavigationHeader.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "https://x.com/375ai_",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "jsx-2e687465ab089a90" + " " + "dropdown-item",
                                                    children: "X"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/NavigationHeader.tsx",
                                                    lineNumber: 204,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/layout/NavigationHeader.tsx",
                                            lineNumber: 191,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/layout/NavigationHeader.tsx",
                                    lineNumber: 168,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: 'relative'
                                    },
                                    onMouseEnter: ()=>handleMouseEnter('irys'),
                                    onMouseLeave: handleMouseLeave,
                                    className: "jsx-2e687465ab089a90",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            style: {
                                                background: 'linear-gradient(135deg, rgba(80, 255, 214, 0.15) 0%, rgba(80, 255, 214, 0.05) 100%)',
                                                border: '2px solid transparent',
                                                borderRadius: '12px',
                                                padding: '10px 20px',
                                                color: '#50FFD6',
                                                fontSize: responsiveStyles.fontSize,
                                                fontWeight: 600,
                                                cursor: 'pointer',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.5px'
                                            },
                                            className: "jsx-2e687465ab089a90" + " " + "header-button-hover irys-button-hover",
                                            children: "What is Irys? ▼"
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/NavigationHeader.tsx",
                                            lineNumber: 221,
                                            columnNumber: 15
                                        }, this),
                                        activeDropdown === 'irys' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onMouseEnter: ()=>handleMouseEnter('irys'),
                                            onMouseLeave: handleMouseLeave,
                                            className: "jsx-2e687465ab089a90" + " " + "dropdown-menu",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "https://docs.irys.xyz/learn/what/what-irys-is",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "jsx-2e687465ab089a90" + " " + "dropdown-item",
                                                    children: "ABOUT"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/NavigationHeader.tsx",
                                                    lineNumber: 244,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "https://x.com/irys_xyz",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "jsx-2e687465ab089a90" + " " + "dropdown-item",
                                                    children: "X"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/NavigationHeader.tsx",
                                                    lineNumber: 252,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/layout/NavigationHeader.tsx",
                                            lineNumber: 239,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/layout/NavigationHeader.tsx",
                                    lineNumber: 216,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px'
                                    },
                                    className: "jsx-2e687465ab089a90" + " " + "header-button-hover faucet-button-hover",
                                    children: "FAUCET"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/NavigationHeader.tsx",
                                    lineNumber: 264,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>window.open('https://375ai-leaderboards.vercel.app/', '_blank'),
                                    style: {
                                        background: 'linear-gradient(135deg, rgba(255, 61, 20, 0.15) 0%, rgba(255, 61, 20, 0.05) 100%)',
                                        border: '2px solid transparent',
                                        borderRadius: '12px',
                                        padding: '10px 20px',
                                        color: '#FF3D14',
                                        fontSize: responsiveStyles.fontSize,
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px'
                                    },
                                    className: "jsx-2e687465ab089a90" + " " + "header-button-hover global-button-hover",
                                    children: "GLOBAL LEADERBOARDS"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/NavigationHeader.tsx",
                                    lineNumber: 282,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/NavigationHeader.tsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/layout/NavigationHeader.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this),
                    address && isConnected && authed && !isOfflineMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px'
                        },
                        className: "jsx-2e687465ab089a90",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: 'linear-gradient(135deg, rgba(80, 255, 214, 0.2) 0%, rgba(80, 255, 214, 0.05) 100%)',
                                    border: '1px solid rgba(80, 255, 214, 0.3)',
                                    borderRadius: '10px',
                                    padding: '8px 16px',
                                    fontSize: '12px',
                                    color: '#50FFD6',
                                    fontFamily: 'Monaco, monospace',
                                    fontWeight: 600,
                                    backdropFilter: 'blur(8px)',
                                    cursor: 'pointer'
                                },
                                title: "Click to copy address",
                                onClick: ()=>{
                                    navigator.clipboard.writeText(address);
                                // You could add a toast notification here
                                },
                                className: "jsx-2e687465ab089a90" + " " + "wallet-address-display",
                                children: [
                                    address.slice(0, 6),
                                    "...",
                                    address.slice(-4)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/layout/NavigationHeader.tsx",
                                lineNumber: 305,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px'
                                },
                                className: "jsx-2e687465ab089a90" + " " + "disconnect-button-hover",
                                children: "Disconnect"
                            }, void 0, false, {
                                fileName: "[project]/components/layout/NavigationHeader.tsx",
                                lineNumber: 327,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/layout/NavigationHeader.tsx",
                        lineNumber: 304,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/layout/NavigationHeader.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(NavigationHeader, "pyF5VtWcSG89rmb2hon8MXMhBCg=");
_c = NavigationHeader;
var _c;
__turbopack_context__.k.register(_c, "NavigationHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/layout/Footer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>Footer
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$responsive$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/responsive.ts [app-client] (ecmascript)");
'use client';
;
;
function Footer() {
    const responsiveStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$responsive$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getResponsiveStyles"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            bottom: '5px',
            left: responsiveStyles.padding,
            right: responsiveStyles.padding,
            textAlign: 'center',
            zIndex: 500
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: '11px',
                    color: '#B9C1C1',
                    marginBottom: '5px'
                },
                children: [
                    "Made with love by",
                    ' ',
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: '8px',
                    color: '#666',
                    lineHeight: 1.2,
                    maxWidth: '800px',
                    margin: '0 auto'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Disclaimer:"
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Footer.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    " 375 Arcade is not in any way, shape, or form affiliated with the 375ai or Irys team. This is a game made for the community. There will be no financial transactions, solicitations, donations, or anything related to user spending. For official updates visit",
                    ' ',
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/LeaderboardPanel.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>LeaderboardPanel
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$responsive$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/responsive.ts [app-client] (ecmascript)");
'use client';
;
;
function LeaderboardPanel(param) {
    let { isPaid, isOfflineMode, selectedGame, leaderboard, isLoadingLeaderboard, personalBests, address } = param;
    var _personalBest_score;
    if (!isPaid && !isOfflineMode) return null;
    // Fix: Use specific game leaderboards instead of combined for filtering
    const gameSpecificLeaderboard = selectedGame === 'tetris' ? leaderboard.filter((e)=>e.gameType === 'tetris') : selectedGame === 'pacman' ? leaderboard.filter((e)=>e.gameType === 'pacman') : leaderboard;
    const uniqueLeaderboard = gameSpecificLeaderboard.reduce((acc, cur)=>{
        const existingIndex = acc.findIndex((entry)=>entry.displayAddress === cur.displayAddress || entry.walletAddress === cur.walletAddress);
        if (existingIndex === -1) acc.push(cur);
        else if (cur.score > acc[existingIndex].score) acc[existingIndex] = cur;
        return acc;
    }, []).sort((a, b)=>b.score - a.score);
    const { width: leaderboardWidth, fontSize: leaderboardFontSize } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$responsive$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLeaderboardScale"])();
    const isMobile = "object" !== 'undefined' && window.innerWidth < 768;
    const isTablet = "object" !== 'undefined' && window.innerWidth >= 768 && window.innerWidth <= 1024;
    const personalBest = selectedGame === 'tetris' ? personalBests.tetris : selectedGame === 'pacman' ? personalBests.pacman : undefined;
    // Calculate responsive padding and spacing
    const containerPadding = isMobile ? '12px' : isTablet ? '14px' : '16px';
    const headerPadding = isMobile ? '15px' : '20px';
    const itemPadding = isMobile ? '8px' : '12px';
    const itemGap = isMobile ? '8px' : '12px';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            top: isMobile ? '60px' : '70px',
            right: isMobile ? '10px' : '20px',
            width: leaderboardWidth,
            background: 'linear-gradient(135deg, rgba(8, 8, 12, 0.95) 0%, rgba(15, 15, 20, 0.95) 100%)',
            border: '1px solid rgba(255, 61, 20, 0.3)',
            borderRadius: '16px',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 25px 50px -12px rgba(255, 61, 20, 0.4)',
            zIndex: 1000,
            overflow: 'hidden',
            maxHeight: isMobile ? 'calc(100vh - 120px)' : 'calc(100vh - 100px)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'relative',
                    padding: headerPadding,
                    background: 'linear-gradient(135deg, rgba(15, 15, 20, 0.8) 0%, rgba(25, 25, 35, 0.8) 100%)',
                    textAlign: 'center',
                    borderBottom: '1px solid rgba(255, 61, 20, 0.2)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
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
            selectedGame && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: containerPadding,
                    borderBottom: '1px solid rgba(255, 61, 20, 0.1)',
                    background: 'rgba(80, 255, 214, 0.02)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: "calc(".concat(leaderboardFontSize, " - 2px)"),
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
                    address && !isOfflineMode ? personalBest ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        gap: '8px',
                                        alignItems: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: leaderboardFontSize,
                                                fontWeight: '600',
                                                color: '#50FFD6'
                                            },
                                            children: ((_personalBest_score = personalBest.score) === null || _personalBest_score === void 0 ? void 0 : _personalBest_score.toLocaleString()) || '0'
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/LeaderboardPanel.tsx",
                                            lineNumber: 132,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: "calc(".concat(leaderboardFontSize, " - 4px)"),
                                                padding: '2px 4px',
                                                background: selectedGame === 'pacman' ? 'rgba(255, 215, 0, 0.1)' : 'rgba(80, 255, 214, 0.1)',
                                                border: "1px solid ".concat(selectedGame === 'pacman' ? 'rgba(255, 215, 0, 0.2)' : 'rgba(80, 255, 214, 0.2)'),
                                                borderRadius: '4px',
                                                color: selectedGame === 'pacman' ? '#FFD700' : '#50FFD6'
                                            },
                                            children: selectedGame === 'pacman' ? "Lv.".concat(personalBest.level) : "L.".concat(personalBest.lines)
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
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'center',
                            color: '#6B7280',
                            fontSize: "calc(".concat(leaderboardFontSize, " - 2px)"),
                            padding: itemPadding,
                            background: 'rgba(107, 114, 128, 0.1)',
                            borderRadius: '8px'
                        },
                        children: "No score recorded yet"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/LeaderboardPanel.tsx",
                        lineNumber: 153,
                        columnNumber: 15
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: itemPadding,
                            background: 'rgba(107, 114, 128, 0.1)',
                            border: '1px solid rgba(107, 114, 128, 0.2)',
                            borderRadius: '8px',
                            filter: 'blur(4px)',
                            textAlign: 'center',
                            color: '#6B7280',
                            fontSize: "calc(".concat(leaderboardFontSize, " - 2px)")
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: containerPadding,
                    maxHeight: isMobile ? '200px' : isTablet ? '220px' : '250px',
                    overflowY: 'auto'
                },
                children: isLoadingLeaderboard ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                }, this) : uniqueLeaderboard.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: 'center',
                        color: '#6B7280',
                        padding: '20px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: leaderboardFontSize
                            },
                            children: "No scores yet!"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/LeaderboardPanel.tsx",
                            lineNumber: 198,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: "calc(".concat(leaderboardFontSize, " - 2px)"),
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
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px'
                    },
                    children: uniqueLeaderboard.slice(0, 10).map((entry, index)=>{
                        var _entry_score;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: leaderboardFontSize,
                                        fontWeight: '600',
                                        minWidth: '28px',
                                        textAlign: 'center',
                                        color: '#E5E7EB'
                                    },
                                    children: index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : "#".concat(index + 1)
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/LeaderboardPanel.tsx",
                                    lineNumber: 215,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        flex: 1
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontFamily: 'Monaco, Menlo, monospace',
                                                fontSize: "calc(".concat(leaderboardFontSize, " - 3px)"),
                                                color: '#9CA3AF',
                                                marginBottom: '2px'
                                            },
                                            children: entry.displayAddress
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/LeaderboardPanel.tsx",
                                            lineNumber: 225,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                gap: '8px',
                                                alignItems: 'center'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: leaderboardFontSize,
                                                        fontWeight: '600',
                                                        color: '#50FFD6'
                                                    },
                                                    children: ((_entry_score = entry.score) === null || _entry_score === void 0 ? void 0 : _entry_score.toLocaleString()) || '0'
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ui/LeaderboardPanel.tsx",
                                                    lineNumber: 234,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: "calc(".concat(leaderboardFontSize, " - 4px)"),
                                                        padding: '2px 4px',
                                                        background: selectedGame === 'pacman' ? 'rgba(255, 215, 0, 0.1)' : 'rgba(80, 255, 214, 0.1)',
                                                        border: "1px solid ".concat(selectedGame === 'pacman' ? 'rgba(255, 215, 0, 0.2)' : 'rgba(80, 255, 214, 0.2)'),
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
                        }, "entry-".concat(index), true, {
                            fileName: "[project]/components/ui/LeaderboardPanel.tsx",
                            lineNumber: 206,
                            columnNumber: 15
                        }, this);
                    })
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
_c = LeaderboardPanel;
var _c;
__turbopack_context__.k.register(_c, "LeaderboardPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/constants/index.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/GameCarousel.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>GameCarousel
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$responsive$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/responsive.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function GameCarousel(param) {
    let { onGameSelect, onWalletConnection, onOfflinePlay, isProcessingPayment, showPaymentButtons = false } = param;
    _s();
    const [carouselIndex, setCarouselIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const responsiveStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$responsive$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getResponsiveStyles"])();
    const currentGame = __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GAMES"][carouselIndex];
    const leftGame = __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GAMES"][(carouselIndex - 1 + __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GAMES"].length) % __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GAMES"].length];
    const rightGame = __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GAMES"][(carouselIndex + 1) % __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GAMES"].length];
    const handleCarouselNext = ()=>setCarouselIndex((prev)=>(prev + 1) % __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GAMES"].length);
    const handleCarouselPrev = ()=>setCarouselIndex((prev)=>(prev - 1 + __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GAMES"].length) % __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GAMES"].length);
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
        padding: '14px 28px',
        color: 'white',
        fontSize: responsiveStyles.fontSize,
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.2s',
        boxShadow: '0 4px 15px rgba(80, 255, 214, 0.4)',
        minWidth: '180px'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "93efdeb5722ddeb6",
                children: ".carousel-transition.jsx-93efdeb5722ddeb6{transition:all .8s cubic-bezier(.25,.46,.45,.94)!important}.carousel-game-center.jsx-93efdeb5722ddeb6,.carousel-game-side.jsx-93efdeb5722ddeb6{text-align:center;flex-direction:row;justify-content:center;align-items:center;gap:20px;display:flex;height:180px!important;padding:20px!important}@media (max-width:768px){.carousel-container.jsx-93efdeb5722ddeb6{flex-direction:column!important;gap:15px!important}.carousel-game-center.jsx-93efdeb5722ddeb6,.carousel-game-side.jsx-93efdeb5722ddeb6{gap:15px;min-width:280px!important;max-width:320px!important;height:140px!important;padding:15px!important}}@media (min-width:481px) and (max-width:768px){.tablet-adjustments.jsx-93efdeb5722ddeb6{transform:scale(.9)!important}.carousel-game-center.jsx-93efdeb5722ddeb6,.carousel-game-side.jsx-93efdeb5722ddeb6{min-width:320px!important;max-width:360px!important;height:160px!important}}@keyframes pulse{0%,to{transform:scale(1.02)}50%{transform:scale(1.05)}}"
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    gap: '24px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    minHeight: '220px'
                },
                className: "jsx-93efdeb5722ddeb6" + " " + "carousel-container tablet-adjustments",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleCarouselPrev,
                        style: {
                            position: 'absolute',
                            left: '30px',
                            zIndex: 10,
                            background: 'rgba(255, 61, 20, 0.2)',
                            border: '2px solid rgba(255, 61, 20, 0.5)',
                            borderRadius: '50%',
                            width: '50px',
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            fontSize: '20px',
                            color: '#FF3D14',
                            transition: 'all 0.3s ease'
                        },
                        className: "jsx-93efdeb5722ddeb6",
                        children: "←"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/GameCarousel.tsx",
                        lineNumber: 109,
                        columnNumber: 8
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            ...cardStyle,
                            minWidth: '300px',
                            maxWidth: '400px',
                            height: showPaymentButtons ? '180px' : '160px',
                            opacity: 0.4,
                            filter: 'blur(2px)',
                            border: '2px solid rgba(255, 61, 20, 0.4)',
                            boxShadow: '0 25px 50px -12px rgba(255, 61, 20, 0.3)',
                            transform: 'scale(0.85)',
                            pointerEvents: 'none'
                        },
                        className: "jsx-93efdeb5722ddeb6" + " " + "carousel-game-side carousel-transition",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: '60px',
                                    height: '60px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0
                                },
                                className: "jsx-93efdeb5722ddeb6",
                                children: leftGame.icon.startsWith('/') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: leftGame.icon,
                                    alt: leftGame.name,
                                    style: {
                                        maxWidth: '100%',
                                        maxHeight: '100%',
                                        objectFit: 'contain'
                                    },
                                    className: "jsx-93efdeb5722ddeb6"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/GameCarousel.tsx",
                                    lineNumber: 153,
                                    columnNumber: 14
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: '56px',
                                        lineHeight: 1
                                    },
                                    className: "jsx-93efdeb5722ddeb6",
                                    children: leftGame.icon
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/GameCarousel.tsx",
                                    lineNumber: 155,
                                    columnNumber: 14
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ui/GameCarousel.tsx",
                                lineNumber: 144,
                                columnNumber: 10
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1,
                                    textAlign: 'center'
                                },
                                className: "jsx-93efdeb5722ddeb6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            color: '#9CA3AF',
                                            margin: '0 0 8px 0',
                                            fontSize: '20px'
                                        },
                                        className: "jsx-93efdeb5722ddeb6",
                                        children: leftGame.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/GameCarousel.tsx",
                                        lineNumber: 159,
                                        columnNumber: 12
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: '#666',
                                            fontSize: '12px',
                                            margin: 0
                                        },
                                        className: "jsx-93efdeb5722ddeb6",
                                        children: leftGame.description
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/GameCarousel.tsx",
                                        lineNumber: 160,
                                        columnNumber: 12
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ui/GameCarousel.tsx",
                                lineNumber: 158,
                                columnNumber: 10
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/GameCarousel.tsx",
                        lineNumber: 132,
                        columnNumber: 8
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            ...cardStyle,
                            minWidth: '500px',
                            maxWidth: '600px',
                            height: showPaymentButtons ? '180px' : '160px',
                            border: "3px solid ".concat(currentGame.borderColor),
                            boxShadow: "0 25px 50px -12px ".concat(currentGame.borderColor, "40"),
                            transform: 'scale(1.0)'
                        },
                        className: "jsx-93efdeb5722ddeb6" + " " + "carousel-game-center carousel-transition",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: showPaymentButtons ? '80px' : '90px',
                                    height: showPaymentButtons ? '80px' : '90px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0
                                },
                                className: "jsx-93efdeb5722ddeb6",
                                children: currentGame.icon.startsWith('/') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: currentGame.icon,
                                    alt: currentGame.name,
                                    style: {
                                        maxWidth: '100%',
                                        maxHeight: '100%',
                                        objectFit: 'contain'
                                    },
                                    className: "jsx-93efdeb5722ddeb6"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/GameCarousel.tsx",
                                    lineNumber: 182,
                                    columnNumber: 14
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: showPaymentButtons ? '76px' : '86px',
                                        lineHeight: 1
                                    },
                                    className: "jsx-93efdeb5722ddeb6",
                                    children: currentGame.icon
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/GameCarousel.tsx",
                                    lineNumber: 184,
                                    columnNumber: 14
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ui/GameCarousel.tsx",
                                lineNumber: 173,
                                columnNumber: 10
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1,
                                    textAlign: 'center',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    paddingLeft: '20px',
                                    marginLeft: '-50px'
                                },
                                className: "jsx-93efdeb5722ddeb6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontSize: showPaymentButtons ? '24px' : '28px',
                                            marginBottom: '8px',
                                            color: currentGame.borderColor,
                                            fontWeight: 700,
                                            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                                        },
                                        className: "jsx-93efdeb5722ddeb6",
                                        children: currentGame.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/GameCarousel.tsx",
                                        lineNumber: 188,
                                        columnNumber: 12
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            marginBottom: showPaymentButtons ? '15px' : '20px',
                                            color: '#9CA3AF',
                                            fontSize: '14px'
                                        },
                                        className: "jsx-93efdeb5722ddeb6",
                                        children: currentGame.description
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/GameCarousel.tsx",
                                        lineNumber: 197,
                                        columnNumber: 12
                                    }, this),
                                    currentGame.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '10px',
                                            alignItems: 'center'
                                        },
                                        className: "jsx-93efdeb5722ddeb6",
                                        children: !showPaymentButtons ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    style: {
                                                        ...buttonStyle,
                                                        animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                                                    },
                                                    onClick: onWalletConnection,
                                                    className: "jsx-93efdeb5722ddeb6",
                                                    children: "🔗 Connect Wallet & Play"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ui/GameCarousel.tsx",
                                                    lineNumber: 205,
                                                    columnNumber: 20
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    style: {
                                                        background: 'rgba(25, 25, 35, 0.5)',
                                                        border: '2px solid rgba(107, 114, 128, 0.3)',
                                                        borderRadius: '12px',
                                                        padding: '10px 20px',
                                                        color: '#9CA3AF',
                                                        fontSize: '12px',
                                                        fontWeight: 500,
                                                        cursor: 'pointer',
                                                        transition: 'all 0.2s',
                                                        minWidth: '140px'
                                                    },
                                                    onClick: ()=>onOfflinePlay(currentGame.id),
                                                    className: "jsx-93efdeb5722ddeb6",
                                                    children: "Just Play"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ui/GameCarousel.tsx",
                                                    lineNumber: 211,
                                                    columnNumber: 20
                                                }, this)
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                            className: "jsx-93efdeb5722ddeb6",
                                            children: isProcessingPayment ? '⏳ Processing...' : "Play ".concat(currentGame.name)
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/GameCarousel.tsx",
                                            lineNumber: 230,
                                            columnNumber: 18
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/GameCarousel.tsx",
                                        lineNumber: 202,
                                        columnNumber: 14
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ui/GameCarousel.tsx",
                                lineNumber: 187,
                                columnNumber: 10
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/GameCarousel.tsx",
                        lineNumber: 164,
                        columnNumber: 8
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            ...cardStyle,
                            minWidth: '300px',
                            maxWidth: '400px',
                            height: showPaymentButtons ? '180px' : '160px',
                            opacity: 0.4,
                            filter: 'blur(2px)',
                            border: '2px solid rgba(255, 61, 20, 0.4)',
                            boxShadow: '0 25px 50px -12px rgba(255, 61, 20, 0.3)',
                            transform: 'scale(0.85)',
                            pointerEvents: 'none'
                        },
                        className: "jsx-93efdeb5722ddeb6" + " " + "carousel-game-side carousel-transition",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: '60px',
                                    height: '60px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0
                                },
                                className: "jsx-93efdeb5722ddeb6",
                                children: rightGame.icon.startsWith('/') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: rightGame.icon,
                                    alt: rightGame.name,
                                    style: {
                                        maxWidth: '100%',
                                        maxHeight: '100%',
                                        objectFit: 'contain'
                                    },
                                    className: "jsx-93efdeb5722ddeb6"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/GameCarousel.tsx",
                                    lineNumber: 268,
                                    columnNumber: 14
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: '56px',
                                        lineHeight: 1
                                    },
                                    className: "jsx-93efdeb5722ddeb6",
                                    children: rightGame.icon
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/GameCarousel.tsx",
                                    lineNumber: 270,
                                    columnNumber: 14
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ui/GameCarousel.tsx",
                                lineNumber: 259,
                                columnNumber: 10
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1,
                                    textAlign: 'center'
                                },
                                className: "jsx-93efdeb5722ddeb6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            color: '#9CA3AF',
                                            margin: '0 0 8px 0',
                                            fontSize: '20px'
                                        },
                                        className: "jsx-93efdeb5722ddeb6",
                                        children: rightGame.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/GameCarousel.tsx",
                                        lineNumber: 274,
                                        columnNumber: 12
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: '#666',
                                            fontSize: '12px',
                                            margin: 0
                                        },
                                        className: "jsx-93efdeb5722ddeb6",
                                        children: rightGame.description
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/GameCarousel.tsx",
                                        lineNumber: 275,
                                        columnNumber: 12
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ui/GameCarousel.tsx",
                                lineNumber: 273,
                                columnNumber: 10
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/GameCarousel.tsx",
                        lineNumber: 247,
                        columnNumber: 8
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleCarouselNext,
                        style: {
                            position: 'absolute',
                            right: '30px',
                            zIndex: 10,
                            background: 'rgba(255, 61, 20, 0.2)',
                            border: '2px solid rgba(255, 61, 20, 0.5)',
                            borderRadius: '50%',
                            width: '50px',
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            fontSize: '20px',
                            color: '#FF3D14',
                            transition: 'all 0.3s ease'
                        },
                        className: "jsx-93efdeb5722ddeb6",
                        children: "→"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/GameCarousel.tsx",
                        lineNumber: 279,
                        columnNumber: 8
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/GameCarousel.tsx",
                lineNumber: 101,
                columnNumber: 6
            }, this)
        ]
    }, void 0, true);
}
_s(GameCarousel, "Fm/hjbqt/2v4CCTTEKwwWc8RDjE=");
_c = GameCarousel;
var _c;
__turbopack_context__.k.register(_c, "GameCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/modals/AuthenticationModal.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>AuthenticationModal
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$responsive$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/responsive.ts [app-client] (ecmascript)");
'use client';
;
;
function AuthenticationModal(param) {
    let { address, onAuthenticate } = param;
    const responsiveStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$responsive$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getResponsiveStyles"])();
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: containerStyle,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                padding: '100px 20px 40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: cardStyle,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            marginBottom: '20px'
                        },
                        children: "Authentication Required"
                    }, void 0, false, {
                        fileName: "[project]/components/modals/AuthenticationModal.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            marginBottom: '10px',
                            color: '#B9C1C1'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Connected:"
                            }, void 0, false, {
                                fileName: "[project]/components/modals/AuthenticationModal.tsx",
                                lineNumber: 53,
                                columnNumber: 65
                            }, this),
                            " ",
                            address === null || address === void 0 ? void 0 : address.slice(0, 6),
                            "...",
                            address === null || address === void 0 ? void 0 : address.slice(-4)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/modals/AuthenticationModal.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
_c = AuthenticationModal;
var _c;
__turbopack_context__.k.register(_c, "AuthenticationModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/modals/NetworkSwitchModal.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>NetworkSwitchModal
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$responsive$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/responsive.ts [app-client] (ecmascript)");
'use client';
;
;
;
function NetworkSwitchModal() {
    const responsiveStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$responsive$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getResponsiveStyles"])();
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
                    __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IRYS_PARAMS"]
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
                        chainId: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IRYS_PARAMS"].chainId
                    }
                ]
            });
        } catch (e) {
            if (e.code === 4001) alert('Network switch cancelled by user');
            else alert('Failed to switch network: ' + e.message);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: containerStyle,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                padding: '100px 20px 40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: cardStyle,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            marginBottom: '30px',
                            color: '#B9C1C1'
                        },
                        children: [
                            "Please switch to ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
_c = NetworkSwitchModal;
var _c;
__turbopack_context__.k.register(_c, "NetworkSwitchModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/modals/MobileWarningModal.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>MobileWarningModal
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$responsive$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/responsive.ts [app-client] (ecmascript)");
'use client';
;
;
function MobileWarningModal(param) {
    let { leaderboard } = param;
    const responsiveStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$responsive$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getResponsiveStyles"])();
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: containerStyle,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                padding: '100px 20px',
                textAlign: 'center',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: cardStyle,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '14px',
                            color: '#9CA3AF',
                            lineHeight: 1.6
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: '15px'
                                },
                                children: [
                                    "🏆 ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
                            leaderboard.filter((e)=>e.gameType === 'tetris').slice(0, 3).map((entry, i)=>{
                                var _entry_score;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: '8px'
                                    },
                                    children: [
                                        i === 0 ? '🥇' : i === 1 ? '🥈' : '🥉',
                                        " ",
                                        entry.displayAddress,
                                        ": ",
                                        (_entry_score = entry.score) === null || _entry_score === void 0 ? void 0 : _entry_score.toLocaleString()
                                    ]
                                }, i, true, {
                                    fileName: "[project]/components/modals/MobileWarningModal.tsx",
                                    lineNumber: 43,
                                    columnNumber: 15
                                }, this);
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: '20px',
                                    marginBottom: '15px'
                                },
                                children: [
                                    "🍒 ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
                            leaderboard.filter((e)=>e.gameType === 'pacman').slice(0, 3).map((entry, i)=>{
                                var _entry_score;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: '8px'
                                    },
                                    children: [
                                        i === 0 ? '🥇' : i === 1 ? '🥈' : '🥉',
                                        " ",
                                        entry.displayAddress,
                                        ": ",
                                        (_entry_score = entry.score) === null || _entry_score === void 0 ? void 0 : _entry_score.toLocaleString()
                                    ]
                                }, i, true, {
                                    fileName: "[project]/components/modals/MobileWarningModal.tsx",
                                    lineNumber: 49,
                                    columnNumber: 15
                                }, this);
                            })
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
_c = MobileWarningModal;
var _c;
__turbopack_context__.k.register(_c, "MobileWarningModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/GameReadyScreen.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>GameReadyScreen
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$responsive$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/responsive.ts [app-client] (ecmascript)");
'use client';
;
;
function GameReadyScreen(param) {
    let { selectedGame, address, isOfflineMode } = param;
    const responsiveStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$responsive$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getResponsiveStyles"])();
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: containerStyle,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                padding: '100px 20px 40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: cardStyle,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            marginBottom: '30px',
                            color: '#B9C1C1',
                            fontSize: '18px'
                        },
                        children: [
                            "Press ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '14px',
                            color: '#B9C1C1'
                        },
                        children: [
                            selectedGame === 'tetris' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "🎯 Clear lines to score points"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/GameReadyScreen.tsx",
                                        lineNumber: 65,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "⚡ Speed increases every 4 lines"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/GameReadyScreen.tsx",
                                        lineNumber: 66,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "🍒 Eat all dots to advance levels"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/GameReadyScreen.tsx",
                                        lineNumber: 70,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "👻 Avoid ghosts or eat power pellets"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/GameReadyScreen.tsx",
                                        lineNumber: 71,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "🎮 Use arrow keys or WASD to move"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/GameReadyScreen.tsx",
                                        lineNumber: 72,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true),
                            address && !isOfflineMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
_c = GameReadyScreen;
var _c;
__turbopack_context__.k.register(_c, "GameReadyScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/hooks/useLeaderboard.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useLeaderboard": ()=>useLeaderboard
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useLeaderboard(mounted, address, isConnected, isOfflineMode) {
    _s();
    const [leaderboard, setLeaderboard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoadingLeaderboard, setIsLoadingLeaderboard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [personalBests, setPersonalBests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLeaderboard.useEffect": ()=>{
            if (!mounted) return;
            const loadLeaderboard = {
                "useLeaderboard.useEffect.loadLeaderboard": async ()=>{
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
                                const tetrisScores = (data.tetris || []).filter({
                                    "useLeaderboard.useEffect.loadLeaderboard.tetrisScores": (entry)=>{
                                        var _entry_walletAddress;
                                        return ((_entry_walletAddress = entry.walletAddress) === null || _entry_walletAddress === void 0 ? void 0 : _entry_walletAddress.toLowerCase()) === address.toLowerCase();
                                    }
                                }["useLeaderboard.useEffect.loadLeaderboard.tetrisScores"]);
                                const pacmanScores = (data.pacman || []).filter({
                                    "useLeaderboard.useEffect.loadLeaderboard.pacmanScores": (entry)=>{
                                        var _entry_walletAddress;
                                        return ((_entry_walletAddress = entry.walletAddress) === null || _entry_walletAddress === void 0 ? void 0 : _entry_walletAddress.toLowerCase()) === address.toLowerCase();
                                    }
                                }["useLeaderboard.useEffect.loadLeaderboard.pacmanScores"]);
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
                }
            }["useLeaderboard.useEffect.loadLeaderboard"];
            loadLeaderboard();
        }
    }["useLeaderboard.useEffect"], [
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
                    const tetrisScores = (data.tetris || []).filter((entry)=>{
                        var _entry_walletAddress;
                        return ((_entry_walletAddress = entry.walletAddress) === null || _entry_walletAddress === void 0 ? void 0 : _entry_walletAddress.toLowerCase()) === address.toLowerCase();
                    });
                    const pacmanScores = (data.pacman || []).filter((entry)=>{
                        var _entry_walletAddress;
                        return ((_entry_walletAddress = entry.walletAddress) === null || _entry_walletAddress === void 0 ? void 0 : _entry_walletAddress.toLowerCase()) === address.toLowerCase();
                    });
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
_s(useLeaderboard, "Y/XMgtKj7iv2hNFT+hxjj+jdHZM=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/lib/walletUtils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "authenticateUser": ()=>authenticateUser,
    "handlePayment": ()=>handlePayment
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
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
    const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].BrowserProvider(ethereum);
    await provider.send('eth_requestAccounts', []);
    const signer = await provider.getSigner();
    // Convert fee to wei with proper validation
    const feeInWei = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].parseEther(gameFee.toString());
    const tx = await signer.sendTransaction({
        to: walletAddress,
        value: feeInWei
    });
    await tx.wait();
};
const authenticateUser = async (signMessageAsync)=>{
    const message = "Authenticate @375 Arcade at ".concat(Date.now());
    await signMessageAsync({
        message
    });
};
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
function Page() {
    _s();
    const { open } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$scaffold$2d$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWeb3Modal"])();
    const { address, isConnected, chainId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"])();
    const { disconnect } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useDisconnect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDisconnect"])();
    const { signMessageAsync } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useSignMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSignMessage"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [authed, setAuthed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPaid, setIsPaid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedGame, setSelectedGame] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [gameStarted, setGameStarted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [gameOver, setGameOver] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isProcessingPayment, setIsProcessingPayment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isOfflineMode, setIsOfflineMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [viewportDimensions, setViewportDimensions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        width: 1920,
        height: 1080
    });
    const { leaderboard, isLoadingLeaderboard, personalBests, refreshLeaderboard } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useLeaderboard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLeaderboard"])(mounted, address, isConnected, isOfflineMode);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            setMounted(true);
        }
    }["Page.useEffect"], []);
    // Track viewport dimensions
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            if (!mounted) return;
            const updateDimensions = {
                "Page.useEffect.updateDimensions": ()=>{
                    setViewportDimensions({
                        width: window.innerWidth,
                        height: window.innerHeight
                    });
                }
            }["Page.useEffect.updateDimensions"];
            updateDimensions();
            window.addEventListener('resize', updateDimensions);
            return ({
                "Page.useEffect": ()=>window.removeEventListener('resize', updateDimensions)
            })["Page.useEffect"];
        }
    }["Page.useEffect"], [
        mounted
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            if (!mounted || !address || !isConnected) return;
            try {
                const savedAuth = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].IS_AUTHENTICATED) === 'true';
                const savedPaid = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].IS_PAID) === 'true';
                const savedGame = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].SELECTED_GAME);
                if (savedAuth) {
                    setAuthed(true);
                    setIsPaid(savedPaid);
                    if (savedGame) setSelectedGame(savedGame);
                }
            } catch (e) {
                console.error(e);
            }
        }
    }["Page.useEffect"], [
        mounted,
        address,
        isConnected
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
                setAuthed(false);
                setIsPaid(false);
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
                        setAuthed(true);
                        setIsPaid(savedPaid);
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
        address
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            if (!mounted) return;
            const canStartGame = (isPaid || isOfflineMode) && selectedGame && !gameStarted && !gameOver;
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
    // Calculate responsive scaling
    const getResponsiveConfig = ()=>{
        const { width, height } = viewportDimensions;
        // Define breakpoints and scaling
        let headerHeight = 70;
        let footerHeight = 60;
        let availableHeight = height - headerHeight - footerHeight;
        let availableWidth = width;
        // Scale everything based on available space
        let titleScale = 0.7; // Base scale for landing pages
        let titleScaleGameplay = 0.4; // Smaller scale for gameplay
        let carouselScale = 1;
        let carouselHeight = 220;
        let carouselWidth = 600;
        let gameScale = 1;
        // Very small screens (tablets in portrait)
        if (width < 768) {
            titleScale = 0.5;
            titleScaleGameplay = 0.3;
            carouselScale = 0.8;
            carouselHeight = 180;
            carouselWidth = 320;
            gameScale = 0.8;
            headerHeight = 60;
            footerHeight = 50;
        } else if (width < 1024) {
            titleScale = 0.6;
            titleScaleGameplay = 0.35;
            carouselScale = 0.9;
            carouselHeight = 200;
            carouselWidth = 500;
            gameScale = 0.9;
        } else if (width < 1366) {
            titleScale = 0.65;
            titleScaleGameplay = 0.4;
            carouselScale = 0.95;
            carouselHeight = 210;
            carouselWidth = 550;
            gameScale = 0.95;
        } else if (width >= 1920) {
            titleScale = 0.95; // Increased by 20% from 0.8
            titleScaleGameplay = 0.5;
            carouselScale = 1.1;
            carouselHeight = 240;
            carouselWidth = 650;
            gameScale = 1.1;
        }
        // Height-based adjustments
        if (height < 700) {
            titleScale *= 0.8;
            titleScaleGameplay *= 0.8;
            carouselScale *= 0.8;
            carouselHeight *= 0.8;
            gameScale *= 0.8;
        } else if (height < 800) {
            titleScale *= 0.9;
            titleScaleGameplay *= 0.9;
            carouselScale *= 0.9;
            carouselHeight *= 0.9;
            gameScale *= 0.9;
        }
        return {
            headerHeight,
            footerHeight,
            availableHeight: height - headerHeight - footerHeight,
            availableWidth,
            titleScale,
            titleScaleGameplay,
            carouselScale,
            carouselHeight,
            carouselWidth,
            gameScale,
            padding: Math.max(10, width * 0.02)
        };
    };
    const responsiveConfig = getResponsiveConfig();
    const handleGamePayment = async (gameType)=>{
        if (!gameType) return;
        setIsProcessingPayment(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$walletUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handlePayment"])(gameType);
            setSelectedGame(gameType);
            setIsPaid(true);
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
        setIsPaid(false);
        setSelectedGame(null);
        if (isOfflineMode) {
            setAuthed(false);
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
        setAuthed(false);
        setIsPaid(false);
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
            setAuthed(true);
            setIsPaid(false);
            setSelectedGame(null);
            setGameStarted(false);
            setGameOver(false);
        } catch (e) {
            if (e.message.includes('User rejected')) alert('Authentication cancelled by user');
            else alert('Authentication failed: ' + e.message);
        }
    };
    const handleOfflinePlay = (gameType)=>{
        console.log('Starting offline play for:', gameType);
        setIsOfflineMode(true);
        setAuthed(true);
        setSelectedGame(gameType);
        setIsPaid(true);
        setGameStarted(false);
        setGameOver(false);
        try {
            localStorage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].IS_AUTHENTICATED, 'true');
            localStorage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].IS_PAID, 'true');
            if (gameType) {
                localStorage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].SELECTED_GAME, gameType);
            }
        } catch (e) {
            console.error('localStorage error:', e);
        }
    };
    const containerStyle = {
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #2a2a2a 100%)',
        color: 'white',
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
        overflow: 'hidden',
        position: 'fixed',
        top: 0,
        left: 0
    };
    const mobileStyles = "\n    /* Mobile Detection - Keep existing mobile logic */\n    @media (max-width: 480px) {\n      .mobile-message {\n        display: flex !important;\n      }\n      .desktop-content {\n        display: none !important;\n      }\n    }\n    \n    /* Remove all scrollbars */\n    * {\n      box-sizing: border-box;\n    }\n    \n    html, body {\n      margin: 0;\n      padding: 0;\n      overflow: hidden;\n      width: 100%;\n      height: 100%;\n    }\n  ";
    const isAuthenticated = authed;
    const hasPaid = isPaid;
    // Wrong network check
    if (chainId && chainId !== 1270 && !isOfflineMode) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: containerStyle,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                    children: mobileStyles
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 364,
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
                    lineNumber: 365,
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
                    lineNumber: 373,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$NetworkSwitchModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 382,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 383,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 363,
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
                    lineNumber: 392,
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
                    lineNumber: 393,
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
                    lineNumber: 401,
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
                            lineNumber: 413,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 414,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 412,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "desktop-content",
                    style: {
                        position: 'absolute',
                        top: "".concat(responsiveConfig.headerHeight, "px"),
                        left: 0,
                        right: 0,
                        bottom: "".concat(responsiveConfig.footerHeight, "px"),
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: "".concat(responsiveConfig.padding, "px"),
                        overflow: 'hidden'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                transform: "scale(".concat(responsiveConfig.titleScale * 1.2, ")"),
                                marginBottom: "".concat(30 * responsiveConfig.titleScale, "px"),
                                transformOrigin: 'center center'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/arcade-title.png",
                                alt: "375 Arcade - Built on Irys",
                                style: {
                                    maxWidth: '350px',
                                    width: '100%',
                                    height: 'auto',
                                    filter: 'drop-shadow(0 8px 16px rgba(255, 61, 20, 0.3))'
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 436,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 431,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                transform: "scale(".concat(responsiveConfig.carouselScale, ")"),
                                transformOrigin: 'center center'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$GameCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                onGameSelect: handleGamePayment,
                                onWalletConnection: handleWalletConnection,
                                onOfflinePlay: handleOfflinePlay,
                                isProcessingPayment: isProcessingPayment,
                                showPaymentButtons: false
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 452,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 448,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 418,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 462,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 391,
            columnNumber: 7
        }, this);
    }
    // Authentication required
    if (!isAuthenticated && address && isConnected) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: containerStyle,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                    children: mobileStyles
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 471,
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
                    lineNumber: 472,
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
                    lineNumber: 480,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$AuthenticationModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    address: address,
                    onAuthenticate: handleAuthentication
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 489,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 493,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 470,
            columnNumber: 7
        }, this);
    }
    // Game selection (authenticated, not paid)
    if (address && isConnected && isAuthenticated && !hasPaid && !gameStarted && !gameOver) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: containerStyle,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                    children: mobileStyles
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 502,
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
                    lineNumber: 503,
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
                    lineNumber: 511,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'absolute',
                        top: "".concat(responsiveConfig.headerHeight, "px"),
                        left: 0,
                        right: 0,
                        bottom: "".concat(responsiveConfig.footerHeight, "px"),
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: "".concat(responsiveConfig.padding, "px"),
                        overflow: 'hidden'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                transform: "scale(".concat(responsiveConfig.titleScale * 1.2, ")"),
                                marginBottom: "".concat(30 * responsiveConfig.titleScale, "px"),
                                transformOrigin: 'center center'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/arcade-title.png",
                                alt: "375 Arcade - Built on Irys",
                                style: {
                                    maxWidth: '350px',
                                    width: '100%',
                                    height: 'auto',
                                    filter: 'drop-shadow(0 8px 16px rgba(255, 61, 20, 0.3))'
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 539,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 534,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                transform: "scale(".concat(responsiveConfig.carouselScale, ")"),
                                transformOrigin: 'center center'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$GameCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                onGameSelect: handleGamePayment,
                                onWalletConnection: handleWalletConnection,
                                onOfflinePlay: handleOfflinePlay,
                                isProcessingPayment: isProcessingPayment,
                                showPaymentButtons: true
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 555,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 551,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 521,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 565,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 501,
            columnNumber: 7
        }, this);
    }
    // Game ready screen
    if ((isOfflineMode || hasPaid) && selectedGame && !gameStarted && !gameOver) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: containerStyle,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                    children: mobileStyles
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 574,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'absolute',
                        top: '50%',
                        left: '40px',
                        transform: 'translateY(-50%)',
                        zIndex: 1000
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            transform: "scale(".concat(responsiveConfig.titleScaleGameplay * 2.4, ")"),
                            transformOrigin: 'left center'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/arcade-title.png",
                            alt: "375 Arcade - Built on Irys",
                            style: {
                                maxWidth: '300px',
                                width: '100%',
                                height: 'auto',
                                filter: 'drop-shadow(0 4px 8px rgba(255, 61, 20, 0.3))'
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 588,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 584,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 577,
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
                    lineNumber: 601,
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
                    lineNumber: 609,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$GameReadyScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    selectedGame: selectedGame,
                    address: address,
                    isOfflineMode: isOfflineMode
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 618,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 623,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 573,
            columnNumber: 7
        }, this);
    }
    // Game playing
    if (gameStarted || gameOver) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: containerStyle,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                    children: mobileStyles
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 632,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'absolute',
                        top: '50%',
                        left: '40px',
                        transform: 'translateY(-50%)',
                        zIndex: 1000
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            transform: "scale(".concat(responsiveConfig.titleScaleGameplay * 2.4, ")"),
                            transformOrigin: 'left center'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/arcade-title.png",
                            alt: "375 Arcade - Built on Irys",
                            style: {
                                maxWidth: '300px',
                                width: '100%',
                                height: 'auto',
                                filter: 'drop-shadow(0 4px 8px rgba(255, 61, 20, 0.3))'
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 646,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 642,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 635,
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
                    lineNumber: 659,
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
                    lineNumber: 667,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'absolute',
                        top: "".concat(responsiveConfig.headerHeight + 60, "px"),
                        left: 0,
                        right: 0,
                        bottom: "".concat(responsiveConfig.footerHeight, "px"),
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        overflow: 'hidden'
                    },
                    children: selectedGame === 'tetris' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            transform: "scale(".concat(responsiveConfig.gameScale, ")"),
                            transformOrigin: 'center center'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CanvasTetris$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                            lineNumber: 692,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 688,
                        columnNumber: 13
                    }, this) : selectedGame === 'pacman' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            transform: "scale(".concat(responsiveConfig.gameScale, ")"),
                            transformOrigin: 'center center'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CanvasPacman$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                            lineNumber: 708,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 704,
                        columnNumber: 13
                    }, this) : null
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 676,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 721,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 631,
            columnNumber: 7
        }, this);
    }
    // Loading state
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: containerStyle,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: mobileStyles
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 729,
                columnNumber: 7
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
                lineNumber: 730,
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
                lineNumber: 738,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: "".concat(responsiveConfig.headerHeight, "px"),
                    left: 0,
                    right: 0,
                    bottom: "".concat(responsiveConfig.footerHeight, "px"),
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        background: 'linear-gradient(135deg, rgba(8, 8, 12, 0.9) 0%, rgba(25, 25, 35, 0.9) 100%)',
                        border: '2px solid rgba(80, 255, 214, 0.3)',
                        borderRadius: '20px',
                        padding: "".concat(40 * responsiveConfig.carouselScale, "px"),
                        backdropFilter: 'blur(12px)',
                        boxShadow: '0 25px 50px -12px rgba(80, 255, 214, 0.2)',
                        textAlign: 'center',
                        transition: 'all 0.3s ease',
                        transform: "scale(".concat(responsiveConfig.carouselScale, ")")
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
                            lineNumber: 770,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                marginBottom: '20px'
                            },
                            children: "Loading..."
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 771,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: '#B9C1C1'
                            },
                            children: "Initializing 375 Arcade..."
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 772,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 759,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 748,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 776,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 728,
        columnNumber: 5
    }, this);
}
_s(Page, "kujp5/ZKQnokFkfAiU/x8Tqx7fI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$scaffold$2d$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWeb3Modal"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useDisconnect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDisconnect"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useSignMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSignMessage"],
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

//# sourceMappingURL=_5fd6f601._.js.map