import React from 'react'
import { connect } from 'react-redux'
import { GameStatus } from '../rules/game'
import { GameState } from '../game-state'
import { PlayScene } from './play-scene'
import { WelcomeScene } from './welcome-scene'
import { LooseScene } from './loose-scene'
import './SceneRenderer.css'

export const SceneRenderer = connect(mapStateToProps)(({ gameStatus }) => (
    <div className="scene-renderer">
        <GameState/>
        {gameStatus === GameStatus.NOT_STARTED && <WelcomeScene/>}
        {gameStatus === GameStatus.CONTINUE && <PlayScene/>}
        {gameStatus === GameStatus.LOOSE && <LooseScene/>}
    </div>
))

function mapStateToProps({ game }) {
    return { gameStatus: game.status }
}
