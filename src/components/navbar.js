export default function navBar() {
    return `
    <nav class="navBar">
        <h1 class="title">FintoUs</h1>

        <p class="navArrowRight"> <img src="/src/assets/icons/arrowRight.svg" alt="arrow right"> </p>
        <p class="navArrowLeft"> <img src="/src/assets/icons/arrowLeft.svg" alt="arrow left"> </p>
        <img class="icon iconDashboard" title="Dashboard" src="/src/assets/icons/dashboard.svg" alt="Dashboard Icon">
        <img class="icon iconInvestments" title="Investments" src="/src/assets/icons/invest.svg" alt="Investments Icon">
        <img class="icon iconWallet" title="Wallet" src="/src/assets/icons/Wallet.svg" alt="Wallet Icon">
        <img class="icon iconGoals" title="Goals" src="/src/assets/icons/goals.svg" alt="Goals Icon">
        <img class="icon iconReports" title="Reports" src="/src/assets/icons/reports.svg" alt="Reports Icon">
        
        <div class="iconText">
            <p class="icon2 iconDashboard"><img src="/src/assets/icons/dashboard.svg" alt="Dashboard Icon"> Dashboard</p>
            <p class="icon2 iconInvestments"><img src="/src/assets/icons/invest.svg" alt="Investments Icon"> Investments</p>
            <p class="icon2 iconWallet"><img src="/src/assets/icons/Wallet.svg" alt="Wallet Icon"> Wallet</p>
            <p class="icon2 iconGoals"><img src="/src/assets/icons/goals.svg" alt="Goals Icon"> Goals</p>
            <p class="icon2 iconReports"><img src="/src/assets/icons/reports.svg" alt="Reports Icon"> Reports</p>
        </div>
    </nav>`;
}