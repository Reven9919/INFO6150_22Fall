import './Resources.css';
import Accordion from './Accordion';

function Resources(){
    const accordionData = [
        {
          title: 'Detachment (2011)',
          content: `In Director Tony Kaye's Detachment, Academy Award® winner Adrien Brody stars as Henry Barthes, an educator with a true talent to connect with his students. Yet Henry has chosen to bury his gift. By spending his days as a substitute teacher, he conveniently avoids any emotional connections by never staying anywhere long enough to form an attachment to either students or colleagues. When a new assignment places him at a public school where a frustrated, burned-out administration has created an apathetic student body, Henry quickly becomes a role model as a teacher who actually cares about the well-being of these students. In finding an emotional connection to the students but also fellow teachers and a runaway teen, he finds that he's not alone in a life and death struggle to find beauty in a seemingly vicious and loveless world.`,
        },
        {
          title: 'Bitter Moon (1992)',
          content: `British couple Fiona (Dame Kristin Scott Thomas) and Nigel (Hugh Grant) are sailing to Istanbul en route to India. They encounter a beautiful French woman, and that night, Nigel meets her while dancing alone in the ship's bar. Later, he meets her crippled American husband Oscar (Peter Coyote), who tells him their story. While living in Paris for several years trying to be a writer, he becomes obsessed with a woman he met by chance on a bus. He tracks her down and they start a steamy love affair. Soon, Oscar finds himself enslaved body and soul by her love, and continues to tell Nigel the details of this relationship in various stages over several visits to Oscar's cabin.`,
        },
        {
          title: 'Portrait de la jeune fille en feu (2019)',
          content: `In 18th-century France young painter Marianne, is commissioned to do the wedding portrait of Héloïse without her knowing. Therefore, Marianne must observe her model by day to paint her portrait at night. Day by day, the two women become closer as they share Héloïse's last moments of freedom before the impending wedding..,.fgksd  kb `,
        },
        {
          title: 'The Dreamers (2003)',
          content: `Paris, spring 1968. While most students take the lead in the May 'revolution', a French poet's twin son Theo and daughter Isabelle enjoy the good life in his grand Paris home. As film buffs they meet and 'adopt' modest, conservatively educated Californian student Matthew. With their parents away for a month, they drag him into an orgy of indulgence of all senses, losing all of his and the last of their innocence. A sexual threesome shakes their rapport, yet only the outside reality will break it up. `,
        },
        {
          title: 'The Handmaiden (2016)',
          content: `1930s Korea, in the period of Japanese occupation, a new girl (Sookee) is hired as a handmaiden to a Japanese heiress (Hideko) who lives a secluded life on a large countryside estate with her domineering Uncle (Kouzuki). But the maid has a secret. She is a pickpocket recruited by a swindler posing as a Japanese Count to help him seduce the Lady to elope with him, rob her of her fortune, and lock her up in a madhouse. The plan seems to proceed according to plan until Sookee and Hideko discover some unexpected emotions. `,
        },
      ];

    return(
        <div className='resources'>
            <div className="accordion">
                {accordionData.map(({ title, content }) => (
                <Accordion key={title} title={title} content={content}/>
            ))} 
            </div>
        </div>
    );
}

export default Resources;
