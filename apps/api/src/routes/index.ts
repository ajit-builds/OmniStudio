import { Router } from 'express';
import { getHealth } from '../controllers/healthController.js';
import { handleContactSubmission } from '../controllers/contactController.js';
import { contactRateLimiter } from '../middleware/rateLimiter.js';

const apiRouter = Router();

// Health check endpoint
apiRouter.get('/health', getHealth);

// Contact inquiry submission with rate limiting and validation
apiRouter.post('/contact', contactRateLimiter, handleContactSubmission);

export { apiRouter };
