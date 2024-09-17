const projectsContainer = document.querySelector('.projects-container');

const getData = async () => {
    try {
        const data = await fetch('https://api.github.com/users/skrmain/repos').then((res) => res.json());

        renderData(data);
    } catch (error) {
        console.log('Error', error);
    }
};

/**
 * @param {{has_pages: boolean, name: string}[]} projects
 */
const renderData = (projects) => {
    const projectsHtml = projects
        .filter((v) => v.has_pages)
        .map(
            (project) => `<a href="/${project.name}" target="_blank">
                    <h3>${project.name}</h3>
                </a>`
        )
        .join(' ');

    projectsContainer.innerHTML = projectsHtml;
};

getData();
