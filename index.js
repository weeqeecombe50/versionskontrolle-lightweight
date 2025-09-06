class VersionskontrolleLightweight {
    constructor() {
        this.repos = {};
        this.currentBranch = 'main';
    }

    init(repoName) {
        if (!this.repos[repoName]) {
            this.repos[repoName] = { branches: { main: [] }, currentBranch: 'main' };
            console.log(`Repository ${repoName} wurde initialisiert.`);
        } else {
            console.log('Repository existiert bereits.');
        }
    }

    branch(branchName) {
        if (!this.repos[repoName]) {
            console.log('Repository nicht gefunden.');
            return;
        }
        this.repos[repoName].branches[branchName] = [];
        console.log(`Branch ${branchName} erstellt.`);
    }

    merge(branchName) {
        // Logik zum Zusammenführen von Branches
    }
}

module.exports = VersionskontrolleLightweight;
