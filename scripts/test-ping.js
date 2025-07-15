#!/usr/bin/env node

/**
 * Script simple para probar el ping a la base de datos
 * Uso: node scripts/test-ping.js
 */

const BASE_URL = process.env.BASE_URL || 'https://delikiosk.vercel.app/api/ping';

async function testPing() {
    try {
        console.log(`🏓 Testing database ping at ${BASE_URL}/api/ping...`);
        
        const response = await fetch(`${BASE_URL}/api/ping`);
        const data = await response.json();
        
        if (data.success) {
            console.log('✅ Ping successful!');
            console.log(`📅 Timestamp: ${data.timestamp}`);
        } else {
            console.log('❌ Ping failed!');
            console.log(`❌ Error: ${data.message}`);
        }
        
        console.log('📊 Full response:', JSON.stringify(data, null, 2));
        
    } catch (error) {
        console.error('💥 Request failed:', error.message);
    }
}

// Ejecutar el test
testPing();
