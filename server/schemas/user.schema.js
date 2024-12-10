const { z } = require('zod');

// Add user schema
const userSchema = z.object({
    name: z.string().min(3).max(50),
    email: z.string().email(),
    password: z.string().min(6),
    role: z.enum(['MANAGER', 'USER', 'OWNER']),
    organization_id: z.number()
});

module.exports = userSchema;