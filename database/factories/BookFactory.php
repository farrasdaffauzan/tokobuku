<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Book>
 */
class BookFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->sentence(1 ),
            'author' => $this->faker->name(),
            'year' => $this->faker->year(),
            'image' => $this->faker->imageUrl(),
            'description' => $this->faker->text(20),
            'synopsis' => $this->faker->paragraph(20, true),
            'rating' => $this->faker->numberBetween(1, 5),
        ];
    }
}
