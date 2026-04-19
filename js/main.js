/* ============================================================
   NICOLAS BLIN — MAIN JS
   ============================================================ */

/* ── HAMBURGER ── */
(function () {
  const btn = document.querySelector('.hamburger');
  const nav = document.querySelector('.site-nav');
  if (!btn || !nav) return;

  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    nav.classList.toggle('open');
    document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
  });

  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      btn.classList.remove('open');
      nav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
})();

/* ── ACTIVE NAV LINK ── */
(function () {
  const links = document.querySelectorAll('.site-nav a');
  const current = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(link => {
    const href = link.getAttribute('href').split('/').pop();
    if (href === current) link.classList.add('active');
  });
})();

/* ── SKILL MODAL ── */
const skillData = {
  reseau: {
    title: 'Réseau & Sécurité',
    items: [
      'Administration DNS / DHCP',
      'Configuration firewalls (pfSense)',
      'Proxy (HAProxy), VPN, Radius',
      'Clés et certificats (PKI)',
      'Analyse et supervision réseau',
      'VLAN, 802.1Q, trunking',
      'Protocoles : OSPF, BGP, STP, RSTP'
    ]
  },
  infra: {
    title: 'Infrastructure & Virtualisation',
    items: [
      'Switchs HP & Cisco (C2960, C3560)',
      'Routeurs, points d\'accès Wi-Fi Pro',
      'Architecture et segmentation L2/L3',
      'Répartition de charge (Load Balancing)',
      'Proxmox VE, VMware ESXi',
      'Haute disponibilité (HA, Clustering)'
    ]
  },
  backup: {
    title: 'Sauvegarde & PCA/PRA',
    items: [
      'Gestion de serveurs bureautiques',
      'Serveurs de sauvegarde et externalisation',
      'Méthodologies PCA (Plan de Continuité)',
      'Méthodologies PRA (Plan de Reprise)',
      'Stratégie 3-2-1 de sauvegarde',
      'Tests de reprise et validation RTO/RPO'
    ]
  },
  toip: {
    title: 'Téléphonie IP',
    items: [
      'Déploiement de solutions ToIP',
      'Administration de systèmes IPBX',
      'Keyyo Phone, Alcatel OmniPCX',
      'Migration SIP et configuration trunks',
      'QoS et priorisation VoIP',
      'Analyse wireshark de flux SIP/RTP'
    ]
  },
  sysadmin: {
    title: 'Systèmes & Bases de données',
    items: [
      'Windows Server (AD, GPO, DNS)',
      'Linux : Ubuntu, Debian, Rocky, RHEL',
      'Bases de données : MySQL & MariaDB',
      'Bases de données : PostgreSQL',
      'Gestion de services : systemd, cron',
      'Scripting Bash et Python'
    ]
  },
  webdev: {
    title: 'Développement & Serveurs Web',
    items: [
      'Serveurs Web : Apache2 & Nginx',
      'Langages : HTML, CSS, JavaScript',
      'Backend : PHP, Python (FastAPI), Java',
      'Framework : Laravel, React',
      'Reverse proxy & gestion SSL/TLS',
      'CI/CD : GitHub Actions'
    ]
  },
  monitoring: {
    title: 'Monitoring & Observabilité',
    items: [
      'Prometheus & Grafana (dashboards)',
      'Node Exporter, Alertmanager',
      'Centreon & Zabbix',
      'Nagios & supervision SNMP',
      'Syslog centralisé (rsyslog)',
      'Métriques cloud et alerting'
    ]
  },
  devops: {
    title: 'DevOps & Cloud',
    items: [
      'Ansible : playbooks, rôles, inventaires',
      'Docker : images, compose, réseaux',
      'OpenStack (DevStack, Nova, Swift, Neutron)',
      'OVHcloud (VM, S3, DNS, VPC)',
      'Proxmox VE et virtualisation',
      'Infrastructure as Code (IaC)'
    ]
  }
};

function openSkillModal(key) {
  const data = skillData[key];
  if (!data) return;
  document.getElementById('modalTitle').textContent = data.title;
  document.getElementById('modalList').innerHTML = data.items
    .map(i => `<li><i class="fas fa-check-circle"></i>${i}</li>`)
    .join('');
  document.getElementById('skillModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeSkillModal() {
  const m = document.getElementById('skillModal');
  if (m) m.classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSkillModal(); });
document.addEventListener('click', e => {
  if (e.target.id === 'skillModal') closeSkillModal();
});

/* ── PROJECT MODAL ── */
const projectData = {
  gridbook: {
    title: 'GridBook : Architecture Souveraine',
    badge: 'Lab Innovation',
    desc: 'Plateforme de pari full-stack auto-hébergée sur Proxmox. Architecture microservices sécurisée via Cloudflare Tunnel. Backend FastAPI, frontend React, base de données PostgreSQL. Monitoring intégré avec Prometheus et Grafana.',
    tags: ['Proxmox', 'FastAPI', 'React', 'PostgreSQL', 'Cloudflare', 'Docker', 'Prometheus'],
    links: { github: 'https://github.com/nblinpro', live: 'https://nblinpro.github.io/M_Cloud_INFRA_SEC/gridbook/gridbook.html' }
  },
  conteneur: {
    title: 'Conteneurisation Multisites Web',
    badge: 'Expertise Cloud',
    desc: 'Migration et industrialisation des sites clients vers une infrastructure Docker chez Innosys. Optimisation de la densité serveur, isolation applicative, déploiement de multiples stacks Laravel/Apache2 en production.',
    tags: ['Docker', 'Apache2', 'PHP', 'Laravel', 'Linux', 'Composer', 'Ansible'],
    links: { github: 'https://github.com/nblinpro', live: 'https://nblinpro.github.io/M_Cloud_INFRA_SEC/projects_ansible/projets_ansible.html' }
  },
  openstack: {
    title: 'Déploiement OpenStack',
    badge: 'Cloud IaaS',
    desc: 'Déploiement complet d\'OpenStack via DevStack sur Ubuntu 24.04. Configuration des services Nova (Compute), Neutron (Network), Swift (Object Storage), Cinder (Block Storage) et Keystone (Identity).',
    tags: ['OpenStack', 'DevStack', 'Nova', 'Neutron', 'Swift', 'Ubuntu'],
    links: { github: 'https://github.com/nblinpro', live: 'https://nblinpro.github.io/M_Cloud_INFRA_SEC/openstack/openstack.html' }
  },
  monitoring: {
    title: 'Stack Monitoring Prometheus/Grafana',
    badge: 'Observabilité',
    desc: 'Déploiement d\'une stack de monitoring complète avec Prometheus pour la collecte de métriques, node_exporter pour les métriques système, et Grafana pour la visualisation avec dashboards personnalisés et alerting.',
    tags: ['Prometheus', 'Grafana', 'Node Exporter', 'Alertmanager', 'Docker'],
    links: { github: 'https://github.com/nblinpro', live: 'https://nblinpro.github.io/M_Cloud_INFRA_SEC/monitoring/monitoring.html' }
  },
  iot: {
    title: 'Architecture IoT & LoRa',
    badge: 'BUT R&T · BUT3',
    desc: 'Conception d\'une architecture IoT complète intégrant ESP32, capteurs environnementaux (température KY-013, buzzer KY-012), protocole LoRa longue portée, Bluetooth et MQTT broker pour la maison connectée.',
    tags: ['ESP32', 'LoRa', 'MQTT', 'BLE', 'IoT', 'Python'],
    links: { github: 'https://github.com/nblinpro', live: 'https://nblinpro.github.io/BUT_R-T/BUT3/projets/architecture_IoT/architecture_IoT.html' }
  },
  toip: {
    title: 'Migration ToIP — DGFIP',
    badge: 'BUT R&T · Entreprise',
    desc: 'Pilotage de la migration complète du parc téléphonique de la DGFIP vers une solution ToIP. Déploiement de switchs L3 Cisco, configuration IPBX Keyyo, segmentation réseau voix/données par VLAN.',
    tags: ['ToIP', 'Cisco', 'VLAN', 'IPBX', 'Keyyo', 'LAN'],
    links: { github: 'https://github.com/nblinpro' }
  },
  samba: {
    title: 'Serveur Samba — Partage Réseau',
    badge: 'Ansible',
    desc: 'Déploiement automatisé d\'un serveur Samba via Ansible pour le partage de fichiers en environnement multi-utilisateurs. Gestion des droits, intégration Active Directory et monitoring de l\'espace disque.',
    tags: ['Ansible', 'Samba', 'Linux', 'AD', 'CIFS'],
    links: { github: 'https://github.com/nblinpro', live: 'https://nblinpro.github.io/M_Cloud_INFRA_SEC/projects_ansible/pages/samba.html' }
  }
};

function openProjectModal(key) {
  const data = projectData[key];
  if (!data) return;
  document.getElementById('pModalBadge').textContent = data.badge;
  document.getElementById('pModalTitle').textContent = data.title;
  document.getElementById('pModalDesc').textContent = data.desc;
  document.getElementById('pModalTags').innerHTML = data.tags.map(t => `<span class="tag">${t}</span>`).join('');
  const linksEl = document.getElementById('pModalLinks');
  let html = '';
  if (data.links.live) html += `<a href="${data.links.live}" target="_blank" class="btn btn-cyan btn-sm"><i class="fas fa-external-link-alt"></i> Voir le projet</a>`;
  if (data.links.github) html += `<a href="${data.links.github}" target="_blank" class="btn btn-outline btn-sm"><i class="fab fa-github"></i> GitHub</a>`;
  linksEl.innerHTML = html;
  document.getElementById('projectModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const m = document.getElementById('projectModal');
  if (m) m.classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('click', e => {
  if (e.target.id === 'projectModal') closeProjectModal();
});

/* ── TABS ── */
function initTabs() {
  document.querySelectorAll('.tabs').forEach(tabs => {
    const btns = tabs.querySelectorAll('.tab-btn');
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.tab;
        btns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const container = tabs.closest('[data-tabs]') || tabs.parentElement;
        container.querySelectorAll('.tab-content').forEach(c => {
          c.classList.toggle('active', c.dataset.tabContent === target);
        });
      });
    });
  });
}

/* ── ACCORDION ── */
function initAccordions() {
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const isOpen = header.classList.contains('open');
      document.querySelectorAll('.accordion-header').forEach(h => {
        h.classList.remove('open');
        const b = h.nextElementSibling;
        if (b && b.classList.contains('accordion-body')) b.classList.remove('open');
      });
      if (!isOpen) {
        header.classList.add('open');
        const body = header.nextElementSibling;
        if (body && body.classList.contains('accordion-body')) body.classList.add('open');
      }
    });
  });
}

/* ── SCROLL ANIMATIONS ── */
function initScrollAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.animate-in').forEach(el => observer.observe(el));
}

/* ── COUNTER ANIMATION ── */
function animateCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    let current = 0;
    const step = Math.ceil(target / 40);
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current + suffix;
      if (current >= target) clearInterval(timer);
    }, 30);
  });
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initAccordions();
  initScrollAnimations();

  const counterSection = document.querySelector('.stats-section');
  if (counterSection) {
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) { animateCounters(); obs.disconnect(); }
    }, { threshold: 0.5 });
    obs.observe(counterSection);
  }
});
