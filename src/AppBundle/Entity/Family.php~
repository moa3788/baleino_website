<?php
namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="family")
 * @ORM\Entity(repositoryClass="AppBundle\Entity\FamilyRepository")
 */
class Family{
	/**
	* @ORM\Column(type="integer")
	* @ORM\Id
	* @ORM\GeneratedValue(strategy="AUTO")
	*/
	private $id;
	/**
	 * @ORM\Column(type="string", length=255)
	 */
	private $name;
	/**
	 * 
	 * @ORM\OneToMany(targetEntity="Species", mappedBy="family")
	 */
	private $species;

	public function __construct()
	{
		$this->$species = new ArrayCollection();
	}
    /**
     * Get id
     *
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set name
     *
     * @param string $name
     *
     * @return Family
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Add species
     *
     * @param \AppBundle\Entity\Species $species
     *
     * @return Family
     */
    public function addSpecy(\AppBundle\Entity\Species $species)
    {
        $this->species[] = $species;

        return $this;
    }

    /**
     * Remove species
     *
     * @param \AppBundle\Entity\Species $species
     */
    public function removeSpecy(\AppBundle\Entity\Species $species)
    {
        $this->species->removeElement($species);
    }

    /**
     * Get species
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getSpecies()
    {
        return $this->species;
    }
}
