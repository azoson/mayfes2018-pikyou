import core from '../enchant/core';
import stages from '../stages';
import { Label } from 'node-enchantjs';
import { Sprite } from 'node-enchantjs';

export default class StageLabels extends enchant.Group {
	private stageNumLabel: Label;
	private stageNameLabel: Label;
	private descriptionLabel: Label;
	private scoreLabel: Label;
	private clearMark: Sprite;

	public constructor() {
		super();

		this.stageNumLabel = new Label(" ");
		this.stageNumLabel.font = "30px Palatino";
		this.stageNumLabel.x = 30;
		this.stageNumLabel.y = 140;
		this.addChild(this.stageNumLabel);

		this.stageNameLabel = new Label(" ");
		this.stageNameLabel.font = "30px Palatino";
		this.stageNameLabel.x = 30;
		this.stageNameLabel.y = 190;
		this.addChild(this.stageNameLabel);

		this.descriptionLabel = new Label(" ");
		this.descriptionLabel.font = "15px Palatino";
		this.descriptionLabel.x = 30;
		this.descriptionLabel.y = 230;
		this.addChild(this.descriptionLabel);

		this.scoreLabel = new Label(" ");
		this.scoreLabel.font = "25px Palatino";
		this.scoreLabel.x = 30;
		this.scoreLabel.y = 270;
		this.addChild(this.scoreLabel);

		this.clearMark = new Sprite(70, 50);
		this.clearMark.image = core.assets["img/clear_mark.png"];
		this.clearMark.x = 200;
		this.clearMark.y = 250;
		this.addChild(this.clearMark);

		this.update(0)
	}

	public update(stageNum: number){
		this.stageNumLabel.text = "ステージ" + (stageNum + 1).toString();
		this.stageNameLabel.text = stages[stageNum].name;
		this.descriptionLabel.text = stages[stageNum].description;
		this.scoreLabel.text = "score: " + "1200" //todo
	}


}