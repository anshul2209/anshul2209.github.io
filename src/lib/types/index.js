// Type definitions for better code organization and documentation

/**
 * @typedef {Object} Skill
 * @property {string} imgSrc - Path to skill logo image
 * @property {string} alt - Alt text for the skill logo
 */

/**
 * @typedef {Object} SkillCategory
 * @property {string} label - Display name for the skill category
 * @property {Skill[]} skills - Array of skills in this category
 */

/**
 * @typedef {Object} BlogPost
 * @property {string} title - Blog post title
 * @property {string} subtitle - Blog post subtitle/description
 * @property {string} url - URL to the blog post
 * @property {string} cover - Cover image filename
 */

/**
 * @typedef {Object} Video
 * @property {string} title - Video title
 * @property {string} url - YouTube embed URL
 */

/**
 * @typedef {Object} ProjectImage
 * @property {number} id - GitHub repository ID
 * @property {string} cover - Cover image filename
 */

/**
 * @typedef {Object} MenuItem
 * @property {string|undefined} segment - Route segment
 * @property {string} label - Display label
 * @property {string} href - Navigation href
 * @property {string} icon - Font Awesome icon class
 */

export const TYPES = {
  SKILL: 'skill',
  SKILL_CATEGORY: 'skillCategory', 
  BLOG_POST: 'blogPost',
  VIDEO: 'video',
  PROJECT_IMAGE: 'projectImage',
  MENU_ITEM: 'menuItem'
};
