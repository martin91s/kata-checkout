import { it, expect, describe, test } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import Checkout from '../components/Checkout.vue';

describe('Checkout', () => {
    it('Default slot text is rendered', async () => {
        const component = await mountSuspended(Checkout);

        console.log(component.html());
    });
});
