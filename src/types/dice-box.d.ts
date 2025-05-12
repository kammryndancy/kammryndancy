declare module '@3d-dice/dice-box' {
  export interface DiceBoxConfig {
    container: string;
    assetPath: string;
    theme?: string;
    offscreen?: boolean;
    scale?: number;
    startingHeight?: number;
    throwForce?: number;
    wasmUrl?: string;
  }

  export default class DiceBox {
    constructor(config: DiceBoxConfig);
    init(): Promise<void>;
    roll(dice: string | { qty: number; sides: number }[]): Promise<any>;
  }
}
