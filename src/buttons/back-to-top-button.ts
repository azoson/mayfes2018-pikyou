import core from '../enchant/core';
import Button from './button';
import StageSelectingScene from '../scenes/stage-selecting-scene';

export default class BackToTopButton extends Button {
	public constructor(x: number, y: number, scene: StageSelectingScene) {
		super(270, 70, scene, 'img/back_to_top_button.png', 'img/back_to_top_button_hover.png');
		this.x = x;
		this.y = y;

		this.initButton(scene);
	}

	private initButton(scene: StageSelectingScene) {
		this.addEventListener('touchstart', () => {
			scene.moveNextScene('Top');
		});
	}
}
