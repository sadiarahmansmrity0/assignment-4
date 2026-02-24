const rawJobs = [
      { id: 'j1', company: 'Mobile First Corp', position: 'React Native Developer', location: 'Remote', type: 'Full-time', salary: '$130k-175k', desc: 'Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.', status: null },
      { id: 'j2', company: 'WebFlow Agency', position: 'Web Designer & Developer', location: 'Los Angeles, CA', type: 'Part-time', salary: '$80k-120k', desc: 'Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.', status: null },
      { id: 'j3', company: 'DataViz Solutions', position: 'Data Visualization Specialist', location: 'Boston, MA ', type: 'Full-time', salary: '$125k-165k', desc: 'Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.', status: null },
  { id: 'j8', company: 'CloudFirst Inc', position: 'Backend Developer', location: 'Seattle, WA', type: 'Full-time', salary: '$140k-190k', desc: 'Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.', status: null },
      { id: 'j4', company: 'StartupXYZ', position: 'Full Stack Engineer', location: 'Remote', type: 'Full-time', salary: '$120k-160k', desc: 'Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.', status: null },
      { id: 'j5', company: 'TechCorp Industries', position: 'Senior Frontend Developer', location: 'San Francisco, CA', type: 'Full-time', salary: '$130k-175k', desc: 'We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.', status: null },
      { id: 'j6', company: 'Innovation Labs', position: 'UI/UX Engineer', location: 'Austin, TX', type: 'Full-time', salary: '$130k-175k', desc: 'Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.', status: null },
      { id: 'j7', company: 'MegaCorp Solutions', position: 'JavaScript Developer', location: 'New York, NY', type: 'Full-time', salary: '$130k-170k', desc: 'Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.', status: null },
    
    ];
      let jobs = JSON.parse(JSON.stringify(rawJobs));
        let currentTab = 'all';

        const container = document.getElementById('jobsContainer');
        const totalSpan = document.getElementById('total-count');
        const interviewSpan = document.getElementById('interview-count');
        const rejectedSpan = document.getElementById('rejected-count');
        const tabJobsCount = document.getElementById('tab-jobs-count');

        const tabAll = document.getElementById('tab-all');
        const tabInterview = document.getElementById('tab-interview');
        const tabRejected = document.getElementById('tab-rejected');

        function updateStats() {
            const total = jobs.length;
            const interview = jobs.filter(j => j.status === 'interview').length;
            const rejected = jobs.filter(j => j.status === 'rejected').length;
            
            totalSpan.innerText = total;
            interviewSpan.innerText = interview;
            rejectedSpan.innerText = rejected;

            let visibleCount = total;
            if (currentTab === 'interview') visibleCount = interview;
            if (currentTab === 'rejected') visibleCount = rejected;
            tabJobsCount.innerText = visibleCount;
        }

        function updateTabStyles() {
            // Reset all tabs
            [tabAll, tabInterview, tabRejected].forEach(tab => {
                tab.classList.remove('bg-[#0b1b33]', 'text-white');
                tab.classList.add('bg-gray-100', 'text-gray-700');
            });

            // Activate current tab
            const activeTab = currentTab === 'all' ? tabAll : 
                             currentTab === 'interview' ? tabInterview : tabRejected;
            activeTab.classList.remove('bg-gray-100', 'text-gray-700');
            activeTab.classList.add('bg-[#0b1b33]', 'text-white');
        }

        function render() {
            let filtered = [];
            if (currentTab === 'all') filtered = jobs;
            else if (currentTab === 'interview') filtered = jobs.filter(j => j.status === 'interview');
            else filtered = jobs.filter(j => j.status === 'rejected');

            if (filtered.length === 0) {
                container.innerHTML = `
                    <div class="col-span-full text-center py-16">
                        <img src="images/jobs.png"  alt="briefcase" class="w-16 h-16 opacity-50 mb-4 mx-auto">
                        <h3 class="text-xl font-semibold text-gray-600 mb-2">No jobs available</h3>
                        <p class="text-gray-500">Check back soon for new opportunities ✨</p>
                    </div>
                `;
                updateStats();
                updateTabStyles();
                return;
            }

            let html = '';
            filtered.forEach(job => {
                html += `
                    <div class="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow relative group" data-id="${job.id}">
                        <button class="delete-btn absolute top-3 right-3 w-8 h-8 rounded-full bg-gray-100 hover:bg-red-100 text-gray-400 hover:text-red-600 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100" aria-label="delete">
                            <i class="fas fa-trash text-sm"></i>
                        </button>
                        
                        <div class="mb-3">
                            <div class="text-sm text-[#0b1b33] font-semibold mb-1">${job.company}</div>
                            <div class="text-lg font-bold text-gray-800">${job.position}</div>
                        </div>
                        
                        <div class="space-y-2 mb-4">
                            <div class="flex items-center gap-2 text-sm text-gray-600">
                                <i class="fas fa-map-pin w-4 text-gray-400"></i>
                                <span>${job.location}</span>
                            </div>
                            <div class="flex items-center gap-2 text-sm text-gray-600">
                                <i class="fas fa-briefcase w-4 text-gray-400"></i>
                                <span>${job.type}</span>
                            </div>
                            <div class="flex items-center gap-2 text-sm text-gray-600">
                                <i class="fas fa-dollar-sign w-4 text-gray-400"></i>
                                <span>${job.salary}</span>
                            </div>
                        </div>
                        
                        <p class="text-sm text-gray-500 mb-4 line-clamp-2">${job.desc}</p>
                        
                        <div class="flex gap-2 mt-2">
                            <button class="btn-interview flex-1 py-2 px-3 rounded-full text-xs font-semibold transition-all ${
                                job.status === 'interview' ? 'bg-[#0b1b33] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }" data-action="interview">
                                INTERVIEW
                            </button>
                            <button class="btn-reject flex-1 py-2 px-3 rounded-full text-xs font-semibold transition-all ${
                                job.status === 'rejected' ? 'bg-[#0b1b33] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }" data-action="rejected">
                                REJECTED
                            </button>
                        </div>
                    </div>
                `;
            });
 container.innerHTML = html;
            updateStats();
            updateTabStyles();
            document.querySelectorAll('.job-card, [data-id]').forEach(card => {
                const jobId = card.dataset.id;
                // Delete button
                const deleteBtn = card.querySelector('.delete-btn');
                if (deleteBtn) {
                    deleteBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        jobs = jobs.filter(j => j.id !== jobId);
                        render();
                    });
                }

                const interviewBtn = card.querySelector('.btn-interview');
                if (interviewBtn) {
                    interviewBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const targetJob = jobs.find(j => j.id === jobId);
                        if (!targetJob) return;
                        if (targetJob.status === 'interview') {
                            targetJob.status = null;
                        } else {
                            targetJob.status = 'interview';
                        }
                        render();
                    });
                }
                    // Reject button
                const rejectBtn = card.querySelector('.btn-reject');
                if (rejectBtn) {
                    rejectBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const targetJob = jobs.find(j => j.id === jobId);
                        if (!targetJob) return;

                        // Toggle reject status
                        if (targetJob.status === 'rejected') {
                            targetJob.status = null;
                        } else {
                            targetJob.status = 'rejected';
                        }
                        render();
                    });
                }
            });
        }
        // Tab switching
        tabAll.addEventListener('click', () => {
            currentTab = 'all';
            render();
        });
        tabInterview.addEventListener('click', () => {
            currentTab = 'interview';
            render();
        });
        tabRejected.addEventListener('click', () => {
            currentTab = 'rejected';
            render();
        });
        // Initial render
        render();