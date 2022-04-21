module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '301d0b02eb12bf2f615ba1c65a2aea34'),
  },
});
