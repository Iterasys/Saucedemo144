module.exports = {
    use: {
        browserName: 'webkit', // 'firefox'ou 'chromium' ou 'webkit'
        headless: false, // false exibe, true oculta
        screenshot: 'only-on-failure',
        video: 'retain-on-failure'
    },
    reporter: [['html', { outputFolder: 'reports', open: 'never' }]],
    timeout: 60000,
}