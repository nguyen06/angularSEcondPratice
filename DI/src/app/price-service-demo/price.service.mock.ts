import { IPriceService } from './price-service.interface';

export class MockPriceService implements IPriceService {
    calculateTotalPrice(basePrice: number, state: string) {
        if(state === 'FL'){
            return basePrice + 0.6;
        }
        return basePrice;
    }
}