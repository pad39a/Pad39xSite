import { slugify } from "~/helpers";

export const servicesData = [
    {
      image: '/images/service_prototype.jpg',
      title: 'PROTOTYPES',
      paragraph: 'This is an excellent option for people & small businesses who are starting out.',
      href: '/#',
      icon: 'fe:prototype',
    },
    {
      image: '/images/service_systems.jpg',
      title: 'SYSTEMS',
      paragraph: 'This is an excellent option for people & small businesses who are starting out.',
      href: '/#',
      icon: 'fe:gear',
    },
    {
      image: '/images/service_mems_foundry.jpg',
      title: 'MEMS FOUNDRY',
      paragraph: 'This is an excellent option for people & small businesses who are starting out.',
      href: '/#',
      icon: 'fe:layer',
    },
    {
      image: '/images/service_exo_concepts.jpg',
      title: 'EXO CONCEPTS',
      paragraph: 'This is an excellent option for people & small businesses who are starting out.',
      href: '/#',
      icon: 'fe:globe',
    },
  ].map((service) => ({
    ...service,
    slug: slugify(service.title),
  }))