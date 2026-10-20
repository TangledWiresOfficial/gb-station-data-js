import categories from "./data/categories.json";

/**
 * A category for train lines
 */
export type Category = {
  /**
   * The display name of this category
   */
  displayName: string;
};

/**
 * A list of all {@link Category}s
 */
export const Categories = categories as Record<CategoryId, Category>;

export type CategoryId = keyof typeof categories;
export const categoryIds = Object.keys(Categories) as CategoryId[];
