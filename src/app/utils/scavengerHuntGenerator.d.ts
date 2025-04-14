export interface ScavengerHuntItem {
    id: number;
    name: string;
    description: string;
    category: string;
}

export interface ScavengerHuntGeneratorConfig {
    items: number;
    categories?: string[];
    difficulty?: 'easy' | 'medium' | 'hard';
}

export declare function generateScavengerHuntItems(config: ScavengerHuntGeneratorConfig): ScavengerHuntItem[];
