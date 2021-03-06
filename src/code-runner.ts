import { World, ItemKind } from './world';
import { Direction } from './character';

export default class CodeRunner {
	private world: World;

	public constructor(world: World) {
		this.world = world;
	}

	public run(code: string) {
		// console.log({ code });
		eval(code);
	}

	public moveForward() {
		this.world.character.moveForward();
	}

	public setDirection(direction: Direction) {
		this.world.character.setDirection(direction);
	}

	public setJump() {
		this.world.character.setJump();
	}

	public stop() {
		this.world.character.stop();
	}

	public canMoveNext(direction: Direction) {
		return this.world.character.canMoveNext(direction);
	}

	public getFrontTile() {
		return this.world.character.getFrontTile();
	}

	public getFeetTile() {
		return this.world.character.getFeetTile();
	}

	public isHavingItem(itemKind: ItemKind) {
		if (itemKind === 'key') {
			return this.world.isHavingKey;
		}
		if (itemKind === 'chest') {
			return this.world.gotChestNum > 0;
		}
	}
}
