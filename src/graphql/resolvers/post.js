const moment = require('moment');
const wp = require('../../wpapi');

module.exports = {
  /**
   *
   */
  Post: {
    title: ({ title }) => (title && title.rendered ? title.rendered : null),
    content: ({ content }) => (content && content.rendered ? content.rendered : null),
    excerpt: ({ excerpt }) => (excerpt && excerpt.rendered ? excerpt.rendered : null),
    date: ({ date_gmt }) => (date_gmt ? moment(date_gmt).toDate() : null),
    modified: ({ modified_gmt }) => (modified_gmt ? moment(modified_gmt).toDate() : null),
  },

  /**
   *
   */
  Query: {
    /**
     *
     */
    posts: async () => {
      const nodes = await wp.posts();
      return {
        total_count: 0,
        total_pages: 0,
        nodes,
      };
    },
  },
};
